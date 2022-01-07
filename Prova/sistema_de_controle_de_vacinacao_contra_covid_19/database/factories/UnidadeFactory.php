<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class UnidadeFactory extends Factory
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
            'bairro' => $this->faker->streetName(),
            'cidade' => $this->faker->city(),
            'estado' => $this->faker->stateAbbr(),
            'data' => $this->faker->date('Y-m-d'),
        ];
    }
}
