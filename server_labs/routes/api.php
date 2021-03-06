<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:api', 'prefix' => 'v1'], function () {
    Route::get('user-list','UserController@getUserList'); // 获取系统用户列表

    Route::post('get-user-conversation', 'ChatController@getUserConversationById'); // 获取用户会话
    Route::post('chat-save', 'ChatController@saveChat'); // 发送短消息
});
