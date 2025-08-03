<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\Api\{
    BeatController,
    UserController,
    InventoryController,
    BasketController,
    S3ImagesController,
    S3BeatsController,
    StripeController
};

// CRUD actions for Beats
Route::apiResource('beats', BeatController::class);

// Category list route
Route::get('/categories', [BeatController::class, 'categories']);

// User list route
Route::get('/users', [UserController::class, 'index']);

// Authenfication (register/login/logout) routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login',    [UserController::class, 'login']);
Route::post('/logout',   [UserController::class, 'logout'])->middleware('auth:sanctum');

// Modify user's data routes
Route::patch('/change-password', [UserController::class, 'changePassword']);
Route::patch('/change-email',    [UserController::class, 'changeEmail']);
Route::patch('/change-nickname', [UserController::class, 'changeNickname']);

// Store, Destroy and Index routes for Inventory and Basket
Route::middleware('auth:sanctum')->group(function () {
    Route::get ('inventory',       [InventoryController::class, 'index']);
    Route::post('inventory/{id}',  [InventoryController::class, 'store']);
    Route::apiResource('basket',    BasketController::class)   ->only(['index', 'store', 'destroy']);
});

// S3 storage routes
Route::prefix('lib')->group( function() {
    Route::get('beat_imgs',      [S3ImagesController::class, 'index']);
    Route::get('beat_mp3_files', [S3BeatsController::class,  'index']);
});

// Stripe session route
Route::post('/create-checkout-session', [StripeController::class, 'createCheckoutSession']);
Route::post('/validate-purchase',       [StripeController::class, 'validatePurchase']);

// Fallback for undefined routes
Route::fallback(function () {
    return response()->json(["message" => "Not found"], 404);
});
