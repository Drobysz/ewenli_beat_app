<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// Facades
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;

class S3ImagesController extends Controller
{
    public function index(){
        $files = Storage::disk('s3')->files('song-covers');

        if (empty($files)) return response()->json(['message' => 'Accessing failed']);

        $url = Cache::remember('img_urls', now()->addMinutes(3), function() use($files) {
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
