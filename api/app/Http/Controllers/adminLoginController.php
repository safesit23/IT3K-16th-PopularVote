<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class adminLoginController extends Controller
{
    public function Login(Request $request){

        //$2y$10$Zz5cjTgv0.ZzWYh5XfosC.g5U6HRdMBPUFaKa1Qn2q7SbmJanILZ.
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        $AdminIT3K = DB::table('Admin')->first();

         if($request->username == $AdminIT3K->username 
           && Hash::check($request->password, $AdminIT3K->password))
           {

            return response()->json($AdminIT3K, 200);

            } else {

                return response()->json([
                    "status" => 401,
                    "message" => "Permission denind"
                ], 401);
            }
      

    //    if (Hash::check($request->password, $hashedPassword)) {
    //         return response()->json(200);
    //     } else {
    //         return response()->json(401);
    //     }



    }
}
