<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VacinaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nome' => $this->faker->name(),
            'pais' => $this->faker->country(),
            'fabricante' => $this->faker->company(),
            'doses' => $this->faker->numberBetween(0, 3),
        ];
    }
}
