<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token,Authorization');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS');



/* ========  Admin  ======== */
Route::post('admin/login','adminLoginController@Login');
Route::group(['middleware' => ['checkAuth']], function () {
  Route::get('competitor', 'CompetitorController@getCompetitor');
});


/* ========  User  ======== */
Route::post('login', 'AuthenController@login');
Route::post('vote', 'VoteController@vote');
Route::get('roundResult','CountingController@RoundResult');

