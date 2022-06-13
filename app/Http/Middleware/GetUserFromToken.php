<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Models\User;

class GetUserFromToken
{
    public function handle(Request $request, Closure $next)
    {
        $token = $request->cookie('token');
        if (!$token) {
            return response()->json(['message' => 'Token not provided'], 422);
        };
        $user = JWTAuth::parseToken()->toUser($token);
        if (!$user) {
            return response()->json(['message' => 'Token invalid'], 422);
        };
        return $user;
    }
}
