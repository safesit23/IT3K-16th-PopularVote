<?php

namespace App\Http\Middleware;

use Closure;

class CheckAuth 
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    private $encode_key = "IT3K-naja";

    public function handle($request, Closure $next)
    {
        $auth = $request->header('authorization');
        $token = substr($auth, 7);
        $decodedJwt = \Lindelius\JWT\JWT::decode($token);
        $decodedJwt->verify($this->encode_key);
        $provider_id = $decodedJwt->sub->provider_id;
        $round = $decodedJwt->sub->round;
        return $next($request);
    }
}
