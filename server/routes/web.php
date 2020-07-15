<?php

use CQ\Middleware\JSON;
use CQ\Routing\Middleware;
use CQ\Routing\Route;

Route::$router = $router->get();
Middleware::$router = $router->get();

Route::get('/error/{code}', 'ErrorController@error');

Middleware::create(['prefix' => '/auth'], function () {
    Route::get('/connect', 'AuthController@connect');
    Route::get('/login', 'AuthController@login', JSON::class);
    Route::get('/logout', 'AuthController@logout');
});
