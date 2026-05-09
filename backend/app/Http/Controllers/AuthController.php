<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
   public function login(Request $request) {
    // Extraemos 'name' (que viene del campo usuario de Angular) y 'password'
    $credentials = [
        'name'     => $request->email, // Usamos lo que llega en 'email' pero lo mapeamos a 'name'
        'password' => $request->password
    ];

    // Intentar generar el token con el nombre como identidad
    if (!$token = auth('api')->attempt($credentials)) {
        return response()->json(['error' => 'Usuario o contraseña incorrecta'], 401);
    }

    return response()->json([
        'token' => $token,
        'user' => Auth::guard('api')->user()], 200);
    
    }
}
