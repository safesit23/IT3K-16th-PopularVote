<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Laravel\Passport\Client;
use Illuminate\Support\Facades\Route;

class LoginController extends Controller
{
    private $client;
    
    public function __construct() {
        $this->client = Client::find(2);
    }

    public function login(Request $request) {
        $this->validate($request, [
            'provider_id' => 'required'
        ]);

        // return response()->json($user);
        $user = User::firstOrCreate([
            'provider_id' => request('provider_id')
        ]);
        
        $params = [
            'grant_type' => 'password',
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => request('provider_id'),
            'password' => '12345678',
            'scope' => '*'
        ];

        // $request->request->add([["password" => '12345678']]);
        
        $request->request->add($params);
        $proxy = Request::create("oauth/token", "POST");
        return Route::dispatch($proxy);
    }

    public function refresh(Request $request) {
        $this->validate($request, [
            'refresh_token' => 'required'
        ]);

        $params = [
            'grant_type' => 'refresh_token',
            'client_id' => $this->client->id,
            'client_secret' => $this->client->secret,
            'username' => request('provider_id'),
            'password' => '12345678',
            'scope' => '*'
        ];

        $request->request->add($params);
        $proxy = Request::create("oauth/token", "POST");
        return Route::dispatch($proxy);
    }

    public function logout(Request $request) {
        $accessToken = Auth::user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update(['revoked' => true]);

        $accessToken->revoke();

        return response()->json([], 204);
    }
}
