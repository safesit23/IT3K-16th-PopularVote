<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthenController extends Controller
{
    private $encode_key = "IT3K-naja";

    public function login(Request $request) {
        $this->validate($request, [
            'provider_id' => 'required',
        ]);
        $user = \App\User::firstOrCreate([
            "provider_id" => $request->provider_id,
            "round" => 1
        ]);

        $jwt = new \Lindelius\JWT\JWT();
        $jwt->exp = time() + (60 * 60 * 2); // expire after 2 hours
        $jwt->iat = time();
        $jwt->sub = $user;
        
        $accessToken = $jwt->encode($this->encode_key);
        return [
            "token" => $accessToken
        ];
    }
}
