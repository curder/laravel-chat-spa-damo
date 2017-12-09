<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1 = [
            'name' => 'Test',
            'email' => 'test@admin.com',
            'password' => Hash::make('password'),
        ];

        factory(App\User::class)->create($user1);
        factory(App\User::class)->create();
    }
}
