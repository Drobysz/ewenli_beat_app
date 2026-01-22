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
        Schema::create('license_registers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('beat_id');
            $table->unsignedBigInteger('license_id');
            $table->integer("price");

            $table->foreign('beat_id')
                ->references('id')
                ->on('beats')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->foreign('license_id')
                ->references('id')
                ->on('licenses')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('license_registers');
    }
};
