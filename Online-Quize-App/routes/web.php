<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('splash_page');
})->name('splash');

Route::get('/login', function () {
    return view('login');
})->name('login');

Route::get('/signup', function () {
    return view('signup');
})->name('signup');

Route::get('/admin', function () {
    return view('admin_login');
})->name('admin');

Route::get('/admin-dashboard', function () {
    return view('admin-dashboard');
})->name('admin-dashboard');
