<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Deleted_Beat extends Model
{
    protected $table = 'deleted_beats';
    protected $fillable = [
        'name',
        'price',
        'categories'
    ];
}
