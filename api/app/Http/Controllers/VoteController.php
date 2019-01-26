<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VoteController extends Controller
{
    private $encode_key = "IT3K-naja";

    public function vote(Request $request)
    {
        $auth = $request->header('authorization');
        $token = substr($auth, 7);
        $decodedJwt = \Lindelius\JWT\JWT::decode($token);
        $decodedJwt->verify($this->encode_key);
        $input = $decodedJwt->sub;

        $this->validate($request, [
            'idCompetitor' => 'required',
            'count' => 'required'
        ]);

        $competitor = \App\Competitor::where('idCompetitor', '=', $request->idCompetitor)->first();
        if(!$competitor) {
            return response()->json([
                "status" => 400,
                "message" => "Competitor Not Found"
            ], 400);
        }

        $user = \App\User::where('provider_id', '=', $input->provider_id)->where('round', '=', $input->round)->first();
        $user->count = $request->count;
        $user->idCompetitor = $request->idCompetitor;
        $user->save();
        
        return response()->json([
            "status" => 200,
            "message" => "OK vote complete bye bye IT3K EIEI"
        ], 200);
    }
}
