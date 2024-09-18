<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class EventGuestsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('event-guests')->insert([
            [
                'id' => '112233',
                'uuid_code' => 'd492192c-7ae4-4220-8e50-a21439e0957a',
                'event_id' => '1',
                'user_id' => '1',
            ],
        ]);
    }
}