<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

// Models
use App\Models\Beat;
use App\Models\User;

// Requests
use App\Http\Requests\BeatStoreRequest;
use App\Http\Requests\BeatUpdateRequest;

class BeatController extends Controller
{
    public function index(){
        $beats = Cache::remember('beats', now()->addMinutes(30), function(){
            return Beat::all();
        });

        return response()->json($beats);
    }

    public function categories(){
        $categories = Cache::remember('categories', now()->addMinutes(30), function(){
            return Beat::select('categories')->distinct()->orderBy('categories')->pluck('categories');
        });

        return response()->json($categories);
    }

    public function show($id){
        try {
            $beat = Cache::remember("beat_$id", now()->addMinutes(3), function() use($id) {
                return Beat::findOrFail($id);
            });

            return response()->json($beat);
        } catch (ModuleNotFoundException $exception) {
            return response()->json(['message'=>'Item was\'nt found'], 404);
        } catch (\Exception $exception) {
            return response()->json(['message'=>'an unknown error'], 404);
        }
    }

    public function store(BeatStoreRequest $request){
        $validated = $request->validated();

        $beat = Beat::create([
            'name' => $validated['name'],
            'price' => $validated['price'],
            'categories' => $validated['categories']
        ]);

        if (isset($beat)){
            return response()->json(['message' => 'Beat was succesfully created'], 204);
        }
    }

    public function update(BeatUpdateRequest $request, $id){
        $validated = $request->validated();

        $beatToUpdate = Beat::findOrFail($id);

        if (isset($beatToUpdate)){
            $beatToUpdate->update($validated);

            // Delete cache after data modification
            Cache::forget('beats');
            Cache::forget("beat_$id");

            return response()->json(['message' => 'Beat was succesfully updated'], 204);
        }
    }

    public function destroy($id){
        try {
            $beat = Beat::findOrFail($id);
            $beat->delete();

            // Delete cache after data modification
            Cache::forget('beats');
            Cache::forget("beat_$id");

            return response()->json(['message'=>'beat was successfully deleted'], 204);
        } catch (ModuleNotFoundException $exception) {
            return response()->json(['message'=>'Item was\'nt found'], 404);
        } catch (\Exception $exception) {
            return response()->json(['message'=>'An unknown error'], 404);
        }
    }
}
