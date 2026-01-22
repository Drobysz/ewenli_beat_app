<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Stripe
use Stripe\StripeClient;
use Stripe\Exception\InvalidRequestException;

use Illuminate\Support\Facades\Storage;

// Model
use App\Models\{
    Beat,
    User,
    License
};

class StripeController extends Controller
{
    public function createCheckoutSession(Request $request){
        $validated = $request->validate([
            'license' => 'required|string',
            'email'   => 'required|email',
            'beat_id' => 'required|integer'
        ]);

        $beat  = Beat::findOrFail($validated['beat_id']);
        $url   = Storage::disk('s3')->url("song-covers/{$beat->name}.png");
        $price = $beat->pricesLicenses->firstWhere('license_name', $validated['license'])?->pivot->price;
        $stripe = new StripeClient(config('services.stripe.secret'));

        $checkout_session = $this->makeBill(
            $stripe,
            $price,
            $beat,
            $validated['license'],
            $url,
            $validated['email']
        );

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

    private function makeBill(
        StripeClient $stripe,
        int $price,
        Beat $beat,
        string $license,
        string $url,
        string $email
    ) {
        $checkout_session = $stripe->checkout->sessions->create([
            'customer_email' => $email,
            'line_items' => [[
                'quantity' => 1,
                'price_data' => [
                    'currency'     => 'eur',
                    'unit_amount'  => $price * 100,
                    'product_data' => [
                        'name'   => "{$beat->name} — {$license} license",
                        'images' => $url ? [$url] : [],
                    ],
                ],
            ]],
            'mode'             => 'payment',
            'invoice_creation' => ['enabled' => true],

            'success_url' => env('APP_FRONT_URL') . "/success?session_id={CHECKOUT_SESSION_ID}&beat_id={$beat->id}",
            'cancel_url'  => env('APP_FRONT_URL') . '/cancel',

            'metadata' => [
                'beat_id'   => $beat->id,
                'beat_name' => $beat->name,
                'license'   => $license,
            ],
        ]);

        return $checkout_session;
    }
}
