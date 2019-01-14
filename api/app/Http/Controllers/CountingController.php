<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CountingController extends Controller
{
    public function vote(Request $request) {
        $this->validate($request, [
            'count' => 'required',
            'idCompetitor' => 'required'
        ]);

        $user = \Auth::user();
        $provider_id = $user->provider_id;
        $currentRound = \App\CurrentRound::find(1)->round;

        $competitor = \App\Competitor::where('idCompetitor', request('idCompetitor'))->first();
        if(!$competitor) {
            return response()->json([
                "status" => 400,
                "message" => "competitor not found"
            ], 400);
        }

        $counting = \App\Counting::firstOrCreate([
            "provider_id" => $provider_id,
            "round" => $currentRound,
            "score" => request('count'),
            "competitor_id" => request('idCompetitor')
        ]);

        if(!$counting) {
            return response()->json([
                "status" => 200,
                "message" => "vote success"
            ]);
        }else{
            return response()->json([
                "status" => 400,
                "message" => "cannot vote"
            ], 400);
        }
        // return response()->json($user);
    }
}
