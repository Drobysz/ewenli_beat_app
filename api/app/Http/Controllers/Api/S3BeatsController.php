<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Facades
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;

class S3BeatsController extends Controller
{
    public function index(){
        $files = Storage::disk('s3')->files('ewenli-beats');

        if (empty($files)) return response()->json(['message' => 'Accessing failed']);

        $url = Cache::remember('beat_files', now()->addMinutes(3), function() use($files) {
            foreach( $files as $key ){
                $url[] = [
                    'local_name' =>  $key,
                    'url' => Storage::disk('s3')->url($key),
                ];
            }

            return $url;
        });

        return response()->json($url);
    }
}
