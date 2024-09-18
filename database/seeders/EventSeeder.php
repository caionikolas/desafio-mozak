<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('events')->insert([
            [
                'id' => '1',
                'uuid_code' => '9d2b625f-f00e-45e4-9098-048dd5f0010b',
                //'owner_id' => '1',
                'name' => 'Festa de Halloween', 
                'description' => 'Festa muito tradicional dos Estados Unidos',
                'address' => 'Rua fulano de tal',
                'zipcode' => '98456000',
                'number' => '55988776655',
                'city' => 'Hawley Lake',
                'state' => '15',
                'max_subscription' => '100',
            ],
        ]);
    }
}