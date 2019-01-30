<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class adminController extends Controller
{
    public function FacebookScore(Request $req){
        return response()->json($req, 200);

    }

    public function WebsiteScore(Request $req){
        return response()->json($req, 200);
    }
}
