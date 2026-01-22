<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Beat extends Model
{
    // I disactivated  laravel timestamps tables
    public $timestamps = false;
    protected $table = 'beats';
    protected $fillable = [
        'name',
        'price',
        'categories'
    ];

    public function basketUsers() {
        return $this->belongsToMany(User::class, 'baskets');
    }

    public function inventoryUsers() {
        return $this->belongsToMany(User::class, 'inventories');
    }

    public function pricesLicenses() {
        return $this->belongsToMany(License::class, 'prices')->withPivot('price');
    }
}
