<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\Api\BeatController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\InventoryController;
use App\Http\Controllers\Api\BasketController;
use App\Http\Controllers\Api\S3ImagesController;
use App\Http\Controllers\Api\S3BeatsController;
use App\Http\Controllers\Api\StripeController;

// CRUD actions for Beats
Route::get('/beats', [BeatController::class, 'index']);

Route::get('/beats/{id}', [BeatController::class, 'show']);

Route::put('/beats', [BeatController::class, 'store']);

Route::patch('/beats/{id}', [BeatController::class, 'update']);

Route::delete('/beats/{id}', [BeatController::class, 'destroy']);

Route::get('/categories', [BeatController::class, 'categories']);

// Index for Users
Route::get('/users', [UserController::class, 'index']);

// Authenfication (register/login)
Route::post('/register', [UserController::class, 'register']);

Route::post('/login', [UserController::class, 'login']);

Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

// Modify user's data
Route::patch('/change-password', [UserController::class, 'changePassword']);

Route::patch('/change-email', [UserController::class, 'changeEmail']);

Route::patch('/change-nickname', [UserController::class, 'changeNickname']);

// Store, Destroy and Index for Inventory and Basket

// Add to Inventory
Route::post('/inventory/{id}', [InventoryController::class, 'store'])->middleware('auth:sanctum');

// Show
Route::get('/inventory', [InventoryController::class, 'index'])->middleware('auth:sanctum');

// Add to Basket
Route::post('/basket/{id}', [BasketController::class, 'store'])->middleware('auth:sanctum');

// Delete from Basket
Route::delete('/basket/{id}', [BasketController::class, 'destroy'])->middleware('auth:sanctum');

// Show
Route::get('/basket', [BasketController::class, 'index'])->middleware('auth:sanctum');


// S3AWSControllers

// Music cover storage accessing
Route::get('/lib/beat_imgs', [S3ImagesController::class, 'index']);

// Audio file storage accessing
Route::get('/lib/beat_mp3_files', [S3BeatsController::class, 'index']);

// Stripe Session
Route::post('/create-checkout-session', [StripeController::class, 'createCheckoutSession']);
