<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// import model post
use App\Models\Post;
// import Resource "PostResource"
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index()
    {
        // get all posts
        $posts = Post::latest()->paginate(5);

        // return colection of posts as a resource
        return new PostResource(true, 'List Data Post', $posts);
    }
}
