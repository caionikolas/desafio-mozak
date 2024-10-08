<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'uuid_code' => 'd492192c-7ae4-4220-8e50-a21439e0957a',
                'username' => 'John Doe',
                'password' => bcrypt('123456'),
                'email' => 'john@example.com',
            ],
            [
                'uuid_code' => 'df29dc5c-15c6-4040-b19a-3c9592dc27d1',
                'username' => 'Joaozinho',
                'password' => bcrypt('789012'),
                'email' => 'zinho@example.com',
            ],
        ]);
    }
}
