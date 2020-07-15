<?php

namespace App\Controllers;

use CQ\Controllers\Controller;

class ErrorController extends Controller
{
    /**
     * Error screen.
     *
     * @param string $httpcode
     * @param mixed  $code
     *
     * @return JSON
     */
    public function error($code)
    {
        switch ($code) {
            case '403':
                $short_message = 'Oops! Access denied';
                $message = 'Access to this page is forbidden';
                break;
            case '404':
                $short_message = 'Oops! Page not found';
                $message = 'We are sorry, but the page you requested was not found';
                break;
            case '500':
                $short_message = 'Oops! Server error';
                $message = 'We are experiencing some technical issues';
                break;

            default:
                $short_message = 'Oops! Unknown Error';
                $message = 'Unknown error occured';
                $code = 400;
                break;
        }

        return $this->respondJson($short_message, [
            'code' => $code,
            'message' => $short_message,
            'description' => $message,
        ], $code);
    }
}
