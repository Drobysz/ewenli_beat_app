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
        return $this->belognsToMany(User::class, 'baskets');
    }

    public function inventoryUsers() {
        return $this->belognsToMany(User::class, 'inventories');
    }
}
