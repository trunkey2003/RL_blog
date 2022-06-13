<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return "Hello from users controller";
    }

    public function signUp(Request $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make($request->password);
        try {
            User::create($data);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Cannot finish your sign up, please try again'], 400);
        }
        return $data;
    }

    public function signIn(Request $request)
    {
        $credentials = $request->only('username', 'password');
        $token = null;
        try {
           if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid username or password'], 422);
           }
        } catch (JWTAuthException $e) {
            return response()->json(['message' => 'Failed to create token'], 500);
        }
        return response(['message' => 'Sign in successfully'], 200)->cookie('token', $token, 60);
    }
    
    public function signOut(Request $request)
    {
        $token = $request->cookie('token');
        if (!$token) return response()->json(['message' => 'Logout successfully'], 200);
        try{
            JWTAuth::parseToken()->invalidate($token);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Failed to logout, please try again'], 500);
        };
        return response()->json(['message' => 'Logout successfully'], 200)->cookie('token', 'haha', 0.0000000000000000000001);
    }

    public function getUserThroughCookie(Request $request)
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
};
