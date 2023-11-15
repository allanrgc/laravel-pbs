<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Clients>
 */
class ClientsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => $this->faker->unique()->randomNumber(3),
            'nome' => Arr::random(['João José', 'José Joselito', 'J. Junior', 'Jabiraca Jonas']),
            'data_nascimento' => Arr::random(['10/12/1981', '08/05/1990', '07/09/1999']),
            // 'cpf_cnpj' => Arr::random(['19318375665', '29318375670', '39318375680', '49318375690',]),
            'cpf_cnpj' => $this->faker->unique()->numerify('###########'),
            'foto' => null,
            'nome_social' => Arr::random(['Empresa1', 'Lojaodavenda', 'TemDeTudo', 'Buss'])
        ];
    }
}
