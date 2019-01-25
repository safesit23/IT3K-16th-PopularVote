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


        $this->validate($request, [
            'provider_id' => 'required',
            'round' => 'required'
        ]);


        $user = \App\User::where('provider_id', '=', $request->provider_id)->where('round','=',$request->round)->first();

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
