<?php

namespace App\Http\Middleware;

use Closure;

class CheckAuth
{

    private $AdminSecret = "Nongmoonoum";

    public function handle($request, Closure $next)
    {
        $auth = $request->header('authorization');
        $token = substr($auth, 7);
        $decodedJwt = \Lindelius\JWT\JWT::decode($token);
        $decodedJwt->verify($this->AdminSecret);
        $response = $next($request);
        $provider_id = $decodedJwt->sub->provider_id;
        $round = $decodedJwt->sub->round;
        return $next($request); 
    }
}