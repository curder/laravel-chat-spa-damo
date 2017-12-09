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
        return reqponse([
            'data' => $chats
        ], Response::HTTP_OK);
    }
}
