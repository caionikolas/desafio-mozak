<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('event-guests', function (Blueprint $table) {
            $table->increments('id')->primary();
            $table->uuid('uuid_code');
            $table->datetime('created_at')->useCurrent();
            $table->datetime('updated_at')->nullable();
            $table->datetime('deleted_at')->nullable();
            $table->integer('event_id')->nullable();
            $table->integer('user_id')->nullable();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('event-guests');
    }
};
