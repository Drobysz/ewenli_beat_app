<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Stripe
use Stripe\Stripe;
use Stripe\Checkout\Session as CheckoutSession;

// Model
use App\Models\Beat;

class StripeController extends Controller
{
    public function createCheckoutSession(Request $request){
        $validated = $request->validate([
            'stripe_price_id' => 'required|string'
        ]);

        $price_id = $validated['stripe_price_id'];

        $beat=Beat::where('stripe_price_id', $price_id)->first();

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $checkout_session = CheckoutSession::create([
            'line_items' => [[
                'price' => $price_id,
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => env('APP_FRONT_URL') . '/success?product_id='. $beat->id,
            'cancel_url' => env('APP_FRONT_URL') . '/canceled',
        ]);

        return response()->json([ 'url' => $checkout_session->url ]);
    }
}
