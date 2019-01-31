<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'provider_id' => $faker->randomNumber(6),
        'round' => $faker->randomElement(['1', '2']),
        'idCompetitor' => $faker->numberBetween(1, 6),
        'count' => $faker->numberBetween(1, 200)
    ];
});
