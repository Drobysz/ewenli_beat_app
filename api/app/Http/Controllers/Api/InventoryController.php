<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InventoryController extends Controller
{
    public function store(Request $request, $id){
        $user = $request->user();
        $user->inventoryBeats()->attach($id);

        return response()->json([ 'message' => 'successfully added' ]);
    }

    public function index(Request $request){
        $user = $request->user();
        $beats = $user->inventoryBeats()->get();

        return response()->json($beats);
    }
}
