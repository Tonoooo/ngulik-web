<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// import model post
use App\Models\Post;
// import Resource "PostResource"
use App\Http\Resources\PostResource;
// import facade "Validator"
use Illuminate\Support\Facades\Validator;
// storage
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    public function index()
    {
        // get all posts
        $posts = Post::latest()->paginate(5);

        // return colection of posts as a resource
        return new PostResource(true, 'List Data Post', $posts);
    }

    public function store(Request $request)
    {
        // define validation rules
        $validator = Validator::make($request->all(), [
            'title'     => 'required',
            'content'   => 'required',
            'image'     => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // upload image
        $image = $request->file('image');
        $image->storeAs('public/posts', $image->hashName());

        // create post
        $post = Post::create([
            'title'     => $request->title,
            'content'   => $request->content,
            'image'     => $image->hashName(),
        ]);

        // return response
        return new PostResource(true, 'Data Post Berhasil Ditambahkan', $post);
    }

    // menampilkan detail data
    public function show($id)
    {
        // find post by id di databse
        $post = Post::find($id);

        //return singgle post as a resource
        return new PostResource(true, 'Detail data post!', $post);
    }


    // update data
    public function update(Request $request, $id)
    {
        // define validation rules
        $validator = Validator::make($request->all(), [
            'title'     => 'required',
            'content'   => 'required',
        ]);

        // check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //find post by id
        $post = Post::find($id);

        // check if image is not empty
        if ($request->hasFile('image')) {

            // upload image
            $image = $request->file('image');
            $image->storeAs('public/posts', $image->hashName());

            // delete old image
            Storage::delete('public/posts/'.$post->image);

            // update post with new image
            $post->update([
                'title'     => $request->title,
                'content'   => $request->content,
                'image'     => $image->hashName(),
            ]);
        } else {
            // update post without image
            $post->update([
                'title'     => $request->title,
                'content'   => $request->content,
            ]);
        }

        // return respon
        return new PostResource(true, 'Data Post Berhasil Diubah', $post);
    }

    // hapus data
    public function destroy($id)
    {
        // find post by id
        $post = Post::find($id);

        //delete image
        // Storage::delete('public/posts/'.$post->image);
        Storage::disk('public')->delete('posts/'.$post->image);

        // Log path gambar
        // $imagePath = 'public/posts/'.$post->image;
        // Log::info('Attempting to delete image at path: ' . $imagePath);

        // try {
        //     $deleted = Storage::delete('public/posts/'.$post->image);
        //     \Log::info('File deletion result: ' . ($deleted ? 'success' : 'failed'));
        // } catch (\Exception $e) {
        //     \Log::error('File deletion error: ' . $e->getMessage());
        // }

        // delete post
        $post->delete();

        // return respon
        return new PostResource(true, 'Data Post Berhasil Dihapus', null);
    }
}
