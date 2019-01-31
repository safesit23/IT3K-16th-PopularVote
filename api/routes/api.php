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

/* ========  Other Route  ======== */
Route::group(['middleware' => ['checkAuth']], function () {
  Route::get('competitor', 'CompetitorController@getCompetitor');
});

/* ========  Admin Route  ======== */
Route::post('admin/login','adminLoginController@Login');
Route::group(['middleware' => ['adminAuth']], function () {
  Route::put('admin/sendFacebookScore','adminController@FacebookScore');
  Route::get('admin/getFacebookScore','adminController@FacebookScore');
  Route::get('admin/websiteScore','adminController@getFacebookScore');
  Route::get('competitor', 'CompetitorController@getCompetitor');
});

/* ========  User  ======== */
Route::post('login', 'AuthenController@login');
Route::post('vote', 'VoteController@vote');
Route::get('roundResult','CountingController@RoundResult');

