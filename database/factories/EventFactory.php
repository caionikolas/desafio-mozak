<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(50),
            'address' => fake()->text(30),
            'complement' => fake()->text(20),
            'zipcode' => fake()->text(5), 
            'number' => fake()->text(2),
            'city' => fake()->text(7), 
        ];
    }
}