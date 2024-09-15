<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integer('id');
            $table->uuid('uuid_code');
            $table->datetime('created_at')->useCurrent();
            $table->datetime('updated_at')->nullable();
            $table->datetime('deleted_at')->nullable();
            $table->string('username');
            $table->string('password');
            $table->string('email')->unique();
            $table->datetime('last_login')->nullable();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
