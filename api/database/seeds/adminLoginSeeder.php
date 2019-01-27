<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class adminLoginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('admin')->insert([
            [
            'username' => "DevIT3K",
            'password' => Hash::make("BangmodEiEi")
            ]      
        ]);

    }
}
