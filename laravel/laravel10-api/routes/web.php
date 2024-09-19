<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// tutori dari santri koding https://santrikoding.com/tutorial-restful-api-laravel-10-1-install-laravel-10

Route::get('/', function () {
    return view('welcome');
});
