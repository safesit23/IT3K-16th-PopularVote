<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CountingController extends Controller
{
    private $encode_key = "IT3K-naja";
    
    public function RoundResult(Request $request){

        $auth = $request->header('authorization');
        $token = substr($auth, 7);
        $decodedJwt = \Lindelius\JWT\JWT::decode($token);
        $decodedJwt->verify($this->encode_key);
        $provider_id = $decodedJwt->sub->provider_id;
        $round = $decodedJwt->sub->round;

        $user = \App\User::where('provider_id', '=', $provider_id)->where('round','=',$round)->first();

        if($user){

            return response()->json([
                'status' => 200,
                'message' => "OK",
                'data' => [
                    'provider_id' => $user->provider_id,
                    'round' => $user->round,
                    'count' => $user->count,
                ],
            ], 200);

        } 
        return response()->json(401);
    }

}
