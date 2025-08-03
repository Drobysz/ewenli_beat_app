<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Stripe
use Stripe\Stripe;
use Stripe\Exception\InvalidRequestException;
use Stripe\Checkout\Session as CheckoutSession;

// Model
use App\Models\{
    Beat,
    User
};

class StripeController extends Controller
{
    public function createCheckoutSession(Request $request){
        $validated = $request->validate([
            'stripe_price_id' => 'required|string',
            'email'           => 'required|email'
        ]);

        $price_id = $validated['stripe_price_id'];
        $email    = $validated['email'];
        $beat_id  = Beat::where('stripe_price_id', $price_id)
                        ->firstOrFail()
                        ->id;

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $checkout_session = CheckoutSession::create([
            'customer_email' => $email,
            'line_items' => [[
                'price'    => $price_id,
                'quantity' => 1,
            ]],
            'mode'        => 'payment',
            'success_url' => env('APP_FRONT_URL') . "/success?session_id={CHECKOUT_SESSION_ID}&price_id={$beat_id}",
            'cancel_url'  => env('APP_FRONT_URL') . '/cancel',
        ]);

        return response()->json([ 'url' => $checkout_session->url ]);
    }

    public function validatePurchase(Request $request) {
        $validated = $request->validate([
            'session_id' => 'required|string'
        ]);
        $session_id = $validated['session_id'];
        Stripe::setApiKey(env('STRIPE_SECRET'));
        try {
            $session = CheckoutSession::retrieve($session_id);
        } catch (InvalidRequestException $e) {
            return response()->json(['valid' => false, 'error' => $e->getMessage()], 400);
        }

        if ($session->payment_status !== 'paid') {
            return response()->json(['valid' => false], 400);
        }

        return response()->json(['valid' => true]);
    }
}
