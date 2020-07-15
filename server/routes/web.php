<?php

use CQ\Middleware\JSON;
use CQ\Routing\Middleware;
use CQ\Routing\Route;
use SuperTokens\Http\Middleware as SuperTokens;

Route::$router = $router->get();
Middleware::$router = $router->get();

Route::get('/error/{code}', 'ErrorController@error');

// Middleware::create(['middleware' => [SuperTokens::class]], function () {

    // Auth System
    Middleware::create(['prefix' => '/auth'], function () {
        Route::get('/connect', 'AuthController@connect');
        Route::get('/login', 'AuthController@login', JSON::class);
        Route::post('/refresh', 'AuthController@refresh', JSON::class);
        Route::post('/logout', 'AuthController@logout');
    });
// });
