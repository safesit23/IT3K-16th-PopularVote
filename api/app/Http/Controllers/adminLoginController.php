<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class adminLoginController extends Controller
{

    private $AdminSecret = "Nongmoonoum";

    public function Login(Request $request){
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        $AdminIT3K = DB::table('Admin')->first();

         if($request->username == $AdminIT3K->username 
           && Hash::check($request->password, $AdminIT3K->password))
           {

            $jwt = new \Lindelius\JWT\JWT();
            $jwt->exp = time() + (60 * 60 * 2); // expire after 2 hours
            $jwt->iat = time();
            $jwt->adminDate = array(
                'Name' => "AdminIT3K",
                'LoginTime' => date('c')
            );

            $adminToken = $jwt->encode($this->AdminSecret);

            return response()->json([
                'status' => 200,
                'message' => "Login successful",
                'token' => $adminToken
            ], 200);

            } else {

                return response()->json([
                    "status" => 401,
                    "message" => "Permission denind"
                ], 401);
            }
      

    }
}
