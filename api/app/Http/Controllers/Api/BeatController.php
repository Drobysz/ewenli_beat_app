<?php

namespace App\Http\Controllers\Api;

use Illuminate\Database\Eloquent\ModelNotFoundException;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\{
    Cache,
    Storage
};

use App\Models\{
    Beat,
    Deleted_Beat,
    User,
    License
};

use App\Http\Requests\{
    BeatStoreRequest,
    BeatUpdateRequest
};

class BeatController extends Controller
{
    public function index(){
        $beats = Cache::get('beats');

        if ($beats == null) {
            $beats = Beat::all();
            if ($beats->isNotEmpty()) {
                Cache::put('beats', $beats, now()->addMinutes(30));
            } else {
                return response()->json(['message' => 'an unknown error'], 404);
            }
        }

        $beats->each(function (Beat $beat){
            $prices = $beat->pricesLicenses
                ->mapWithKeys(fn($lic) => [$lic->license_name => $lic->pivot->price]);
            $beat->setRelation('prices', $prices);
            $beat->unsetRelation('pricesLicenses');
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
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message'=>'Item was\'nt found'], 404);
        } catch (\Exception $exception) {
            return response()->json(['message'=>'an unknown error'], 404);
        }
    }

    public function store(BeatStoreRequest $request){
        $data = $request->validated();

        // create beat
        $beat = Beat::create([
            'name'       => $data['name'],
            'categories' => $data['categories']
        ]);

        if (!isset($beat))
            return response()->json(['message' => 'Creation of beat was failed'], 404);

        // add prices
        $this->addPrices($beat, $data['prices']);

        // add media
        $this->uploadToS3(
            $image,
            $data['name'],
            'song-covers',
        );
        $this->uploadToS3(
            $request->file('audio'),
            $data['name'],
            'ewenli-beats',
        );

        return response()->json(['message' => 'Beat was succesfully created'], 201);
    }

    public function update(BeatUpdateRequest $request, $id){
        $data = $request->validated();
        $beatToUpdate = Beat::findOrFail($id);

        if (!isset($beatToUpdate))
            return response()->json(['message' => 'Beat doesn\'t exists or update failed'], 404);

        if ($request->has('name')){
            Storage::disk('s3')->move(
                'song-covers/' . $beatToUpdate->name . '.png',
                'song-covers/' . $data['name'] . '.png'
            );
            Storage::disk('s3')->move(
                'ewenli-beats/' . $beatToUpdate->name . '.mp3',
                'ewenli-beats/' . $data['name'] . 'mp3'
            );
        }

        if ($request->hasFile('audio')) {
            $audio = $request->file('audio');
            $this->updateAtS3(
                $audio,
                $beatToUpdate->name,
                'ewenli-beats'
            );
        }

        if ($request->hasFile('image')) {
            $img = $request->file('image');
            $this->updateAtS3(
                $img,
                $beatToUpdate->name,
                'song-covers'
            );
        }

        if ($request->has('license')){
            $license = License::where('license_name', $data['license'])->first();
            $beatToUpdate->pricesLicenses()
                ->updateExistingPivot($license->id, ['price' => $data['price']]);
        }

        $beatToUpdate->update($request);

        Cache::forget('beats');
        Cache::forget("beat_$id");

        return response()->json(['message' => 'Beat was succesfully updated'], 201);
    }

    public function destroy($id){
        try {
            $beat = Beat::findOrFail($id);
            $name = $beat->name;

            Storage::disk('s3')->delete("song-covers/$name.png");
            Storage::disk('s3')->delete("ewenli-beats/$name.mp3");

            Deleted_Beat::create([
                'name'       => $name,
                'categories' => $beat->categories
            ]);

            $beat->delete();

            Cache::forget('beats');
            Cache::forget("beat_$id");

            return response()->json(['message'=>'Your beat was successfully deleted'], 204);
        } catch (ModelNotFoundException $exception) {
            return response()->json(['message'=>'Item wasn\'t found'], 404);
        } catch (\Exception $exception) {
            return response()->json(['message'=>'An unknown error'], 404);
        }
    }

    private function addPrices(Beat $beat, array $prices) {
        for ($i = 0; $i < 3; $i++) {
            $beat->pricesLicenses()->attach($i + 1, ['price' => $prices[$i]]);
        }
    }

    private function uploadToS3($file, string $name, string $folder) {
        $original_extension = $file->getClientOriginalExtension();
        $filename = $name . '.' . $original_extension;

        Storage::disk('s3')->putFileAs(
            $folder,
            $file,
            $filename,
        );
    }

    private function updateAtS3($file, string $name, string $folder) {
        $original_extension = $file->getClientOriginalExtension();
        $filename = $name . '.' . $original_extension;

        Storage::disk('s3')->putFileAs(
            $folder,
            $file,
            $filename,
        );
    }
}
