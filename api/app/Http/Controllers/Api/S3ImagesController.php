<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\{
    Storage,
    Cache
};

class S3ImagesController extends Controller
{
    public function index(){
        $files = Storage::disk('s3')->files('song-covers');

        if (empty($files))
            return response()->json(['message' => 'Accessing failed'], 404);

        $url = Cache::remember('img_urls', now()->addMinutes(3), function() use($files) {
            foreach( $files as $key ){
                $url[] = [
                    'local_name' => $key,
                    'url' => Storage::disk('s3')->url($key),
                ];
            }

            return $url;
        });

        return response()->json($url);
    }

    public function store(Request $request){
        $request = $request->validated([
            'name' => 'required|string',
            'content_type' => 'required|string'
        ]);

        $base = preg_replace('/[^A-Za-z0-9._-]+/', '-', $request['name']);
        $base .= '.png';

        $key = 'song-covers/' . $base;
        $client = Storage::disk('s3')->getClient();
        $bucket = config('filesystems.disks.s3.bucket');

        $cmd = $client->getCommand('PutObject', [
            'bucket'       => $bucket,
            'key'          => $key,
            'content_type' => $request['content_type'],
            'ACL'          => 'private'
        ]);

        $presigned = $client->createPresignedRequest($cmd, '+5 minutes');
        Cache::forget('img_urls');

        return response()->json([
            'url' => $presigned->url,
            'headers' => [
                'Content-Type' => $request['content_type'],
            ]
        ], 204);
    }
}
