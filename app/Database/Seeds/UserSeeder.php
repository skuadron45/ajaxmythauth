<?php

namespace App\Database\Seeds;

use App\Entities\User;
use App\Models\UserModel;
use CodeIgniter\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $user = new User();
        $user->setPassword('admin');
        $user->email = "admin@gmail.com";
        $user->activate();
        $user->username = "admin";

        $userModel = new UserModel();
        $userModel->save($user);
    }
}
