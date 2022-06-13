<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')->group(function(){
    Route::get('/get-user-through-cookie', [AuthController::class, 'getUserThroughCookie']);
    Route::post('/sign-up', [AuthController::class, 'signUp']);
    Route::post('/sign-in', [AuthController::class, 'signIn']);
    Route::delete('/sign-out', [AuthController::class, 'signOut']);
    Route::get('/', [AuthController::class, 'index']);
});

Route::prefix('posts')->middleware('jwt.auth')->group(function(){
    Route::get('/', [PostController::class, 'getAllPosts']);
    // Route::post('/', [PostController::class, 'createPost']);
});