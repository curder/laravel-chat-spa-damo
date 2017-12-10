<?php

namespace App\Http\Controllers;

use App\Chat;
use Symfony\Component\HttpFoundation\Response;

class ChatController extends Controller
{
    public function getUserConversationById()
    {
        $userId = request('id');
        $authUserId = request()->user()->id;
        $chats = Chat::whereIn('sender_id', [$authUserId, $userId])
            ->whereIn('receiver_id', [$authUserId, $userId])
            ->orderBy('created_at', 'asc')
            ->get();
        return response([
            'data' => $chats
        ], Response::HTTP_OK);
    }

    public function saveChat()
    {
        $chat = new Chat;
        $chat->sender_id = request()->user()->id;
        $chat->receiver_id = request('receiver_id');
        $chat->chat = request('chat');
        $chat->save();

        return response([
            'data' => $chat,
        ], Response::HTTP_OK);
    }
}
