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
        Schema::create('events', function (Blueprint $table) {
            $table->integer('id');
            $table->uuid('uuid_code');
            $table->datetime('created_at')->useCurrent();
            $table->datetime('updated_at')->nullable();
            $table->datetime('deleted_at')->nullable();
            $table->integer('owner_id');
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('address');
            $table->string('complement')->nullable();
            $table->string('zipcode');
            $table->string('number');
            $table->string('city');
            $table->integer('state');
            $table->datetime('starts_at')->nullable();
            $table->datetime('ends_at')->nullable();
            $table->integer('max_subscription');
            $table->boolean('is_active')->default(false);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
