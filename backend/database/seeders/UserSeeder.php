<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // 1. USUARIO ADMINISTRADOR (Con permisos para escribir)
        User::create([
            'name' => 'Administrador',
            'email' => 'admin@liga-calatrava.com',
            'password' => Hash::make('admin1234'), // para que encripte la contraseña
            'role' => 1, 
        ]);

        // 2. USUARIO SIN PERMISOS (Solo lectura, no puede escribir)
        User::create([
            'name' => 'Usuario',
            'email' => 'user@liga-calatrava.com',
            'password' => Hash::make('user1234'),
            'role' => 0, 
        ]);
    }
}