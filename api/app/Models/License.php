<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class License extends Model
{
    public $timestamps = false;

    public function pricesBeats() {
        return $this->belongsToMany(Beat::class, 'prices')->withPivot('price');
    }
}
