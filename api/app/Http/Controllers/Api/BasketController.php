<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BasketController extends Controller
{
    public function store(Request $request, $id){
        $user = $request->user();
        if (!$user->basketBeats()->where('beats.id', $id)->exists()){
            $user->basketBeats()->attach($id);

            return response()->json([ 'message' => 'successfully added' ]);
        } else {
            return response()->json([ 'message' => 'it has already been added' ]);
        }

    }

    public function destroy(Request $request, $id){
        $user = $request->user();
        $user->basketBeats()->detach($id);

        return response()->json([ 'message' => 'successfully deleted' ]);
    }

    public function index(Request $request){
        $user = $request->user();
        $beats = $user->basketBeats()->get();

        return response()->json($beats);
    }
}
