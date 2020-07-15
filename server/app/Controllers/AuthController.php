<?php

namespace App\Controllers;

use CQ\Controllers\Controller;

class AuthController extends Controller
{
    public function connect()
    {
        return $this->respondJson(
            'Connection Established',
            ['foo'=>'bar']
        );
    }
}
