<?php

namespace App\Http\Controllers;

use App\Competitor;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class adminController extends Controller
{
    public function FacebookScore(Request $req)
    {
        foreach ($req->facebook as $facebookScore) {
            Competitor::find($facebookScore['id'])->update($facebookScore);
        }
        return Competitor::all(['idCompetitor', 'like', 'share']);
    }

    public function getFacebookScore(){

        return Competitor::all(['idCompetitor', 'like', 'share']);

    }

    public function WebsiteScore(Request $req)
    {
        //return Competitor::count();
        $all = Competitor::all(['idCompetitor']);
        $r = [];
        foreach ($all as $a) {
            $id = $a["idCompetitor"];
            $result = [];
            $result['idCompetitor'] = $id;
            $x = User::where('idCompetitor', $id)
                ->where('round', 1)->select(DB::raw('sum(count) as total'))->get();
            $result['round_1'] = (int) $x[0]['total'];
            $x = User::where('idCompetitor', $id)
                ->where('round', 2)->select(DB::raw('sum(count) as total'))->get();
            $result['round_2'] = (int) $x[0]['total'];
            array_push($r, $result);
        }
        return response()->json($r, 200);
    }
}
