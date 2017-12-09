<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Chat
 * @package App
 */
class Chat extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'sender_id', 'receiver_id', 'chat', 'read_at'
    ];


    /**
     * @var array
     */
    protected $appends = ['sender', 'receiver'];

    /**
     * @return mixed
     */
    public function getSenderAttribute()
    {
        return User::where('id', $this->sender_id)->first();
    }

    /**
     * @return mixed
     */
    public function getReceiverAttribute()
    {
        return User::where('id', $this->receiver_id)->first();
    }
}
