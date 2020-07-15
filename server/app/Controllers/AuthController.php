<?php

namespace App\Controllers;

use CQ\DB\DB;
use CQ\Controllers\Controller;
use SuperTokens\SuperTokens;

class AuthController extends Controller
{
    /**
     * Connect client
     *
     * @param object $request
     *
     * @return Json
     */
    public function connect()
    {
        return $this->respondJson(
            'Connection Established',
            ['foo'=>'bar']
        );
    }

    /**
     * Login user
     *
     * @param object $request
     *
     * @return Json
     */

    public function login($request)
    {
        // try {
        //     AuthValidator::login($request->data);
        // } catch (Exception $e) {
        //     return $this->respondJson(
        //         'Please enter all fields',
        //         json_decode($e->getMessage()),
        //         422
        //     );
        // }

        // $user = DB::get('users', [
        //     'id',
        //     'password',
        //     'yubikey_id',
        //     'active [Bool]',
        // ], [
        //     'email' => $request->data->email,
        // ]);

        // if (!$user) {
        //     return $this->respondJson('Incorrect credentials');
        // }

        // validate password
        // validate yubikey

        // if (!$user['active']) {
        //     return $this->respondJson('Account deactivated');
        // }

        $userId = "User1";
        $jwtPayload = ["name" => "spooky action at a distance"];
        $sessionData = ["awesomeThings" => ["programming", "javascript", "supertokens"]];

        SuperTokens::createNewSession($request, $userId, $jwtPayload, $sessionData);

        return $this->respondJson('login success');
    }

    /**
     * Refresh user
     *
     * @param object $request
     *
     * @return Json
     */

    public function refresh($request)
    {
        return $this->respondJson('refresh');
    }

    /**
     * Logout user
     *
     * @param object $request
     *
     * @return Json
     */

    public function logout()
    {
        return $this->respondJson('logout');
    }
}
