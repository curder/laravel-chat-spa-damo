<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{

    /**
     * 获取聊天的用户
     *
     * @return mixed
     */
    public function getUserList()
    {
        return response()->json([
            'data' => User::all()
        ], Response::HTTP_OK);
    }
}
