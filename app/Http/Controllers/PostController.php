<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function getAllPosts()
    {
        $post = Post::all();
        return response()->json($post);
    }

    public function createPost(Request $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'body' => $request->body,
            'username' => $request->username,
        ]);
        return response()->json($post);
    }
};
