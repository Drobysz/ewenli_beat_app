<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('beats', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->integer('price');
            $table->enum('categories', array('digicore', 'hyperpop', 'scenecore', 'EDM', '2010 pop', 'house', '100 gecs', 'hard hyperpop'));
        });
    }

    /**
     * Reverse the migrations.
     *
     */
    public function down(): void
    {
        Schema::dropIfExists('beats');
    }
};
