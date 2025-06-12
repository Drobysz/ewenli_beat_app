<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Sanctum for authenfication
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\PersonalAccessToken;

// Facades
use Illuminate\Support\Facades\Hash;


// Models
use App\Models\User;

// Requests
use App\Http\Requests\UserRegistrateRequest;
use App\Http\Requests\UserLoginRequest;

class UserController extends Controller
{
    // Action showing list of all users
    public function index(){
        $users= User::all();

        return response()->json($users);
    }

    // Authenfication action group
    public function register(UserRegistrateRequest $request){
        try {
            $validated = $request->validated();

            $user = User::create($validated);
            $token = $user->createToken($request->name);

            return [
                'user' => $user,
                'token'=> $token->plainTextToken
            ];
        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->message]);
        }
    }

    public function login(UserLoginRequest $request){
        try {
            $request->validated();

            $user = User::where('email', $request->email)->first();

            if ( !$user || !Hash::check($request->password, $user->password) ){
                return [ 'message' => 'Your input credentials are incorrect' ];
            }

            $token = $user->createToken($user->name);

            return [
                'user' => $user,
                'token'=> $token->plainTextToken
            ];
        } catch (\Exception $exception) {
            return [ 'message' => 'An unknown error' ];
        }
    }

    public function logout(Request $request){
        $request->user()->tokens()->delete();

        return [ 'message' => 'You\'re successfully logged out' ];
    }

    // Modifing user data action group
    public function changePassword(Request $request){
        $validated = $request->validate([
            'token' => 'required|string',
            'password' => 'required|string|unique:users,password'
        ]);

        $token = PersonalAccessToken::findToken($request->token);

        if (!$token){
            return [ 'message' => 'token is incorrect' ];
        };

        $user = $token->tokenable;
        $user->password = Hash::make($request->password);
        $user->save();

        return [ 'message' => 'Your password was changed' ];
    }

    public function changeEmail(Request $request){
        $validated = $request->validate([
            'token' => 'required|string',
            'email' => 'required|string|unique:users,email'
        ]);

        $token = PersonalAccessToken::findToken($request->token);

        if (!$token){
            return [ 'message' => 'token is incorrect' ];
        };

        $user = $token->tokenable;
        $user->email = $request->email;
        $user->save();

        return [ 'message' => 'Your email was changed' ];
    }

    public function changeNickname(Request $request){
        $validated = $request->validate([
            'token' => 'required|string',
            'name' => 'required|string|unique:users,name'
        ]);

        $token = PersonalAccessToken::findToken($request->token);

        if (!$token){
            return [ 'message' => 'token is incorrect' ];
        };

        $user = $token->tokenable;
        $user->name = $request->name;
        $user->save();

        return [ 'message' => 'Your nickname was changed' ];
    }
}
