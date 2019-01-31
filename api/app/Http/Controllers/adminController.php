<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Competitor;

class adminController extends Controller
{
    public function FacebookScore(Request $req)
    {

        foreach ($req->facebook as $facebookScore) {
            $x = (object)$facebookScore;
            Competitor::find($x->id)->update($facebookScore);
        }
        return Competitor::all();


    }

    public function WebsiteScore(Request $req)
    {
        return response()->json($req, 200);
    }
}
