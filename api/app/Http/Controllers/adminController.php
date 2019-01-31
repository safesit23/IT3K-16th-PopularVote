<?php

namespace App\Http\Controllers;

use App\Competitor;
use Illuminate\Http\Request;

class adminController extends Controller
{
    public function FacebookScore(Request $req)
    {
        foreach ($req->facebook as $facebookScore) {
            Competitor::find($facebookScore['id'])->update($facebookScore);
        }
        return Competitor::all();
    }

    public function WebsiteScore(Request $req)
    {
        return response()->json($req, 200);
    }
}
