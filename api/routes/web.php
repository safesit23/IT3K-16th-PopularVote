<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/users/{user}', function(App\User $user){
    return $user->email;
});

Route::get('/testing', function(){
    $user = new App\User();
    $user->name = "Aof";
    $user->email = "abc@def.com";
    $user->password = "12345678";
    $user->save();
    return response()->json($user);
});