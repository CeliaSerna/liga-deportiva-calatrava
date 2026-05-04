<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Obtenemos el usuario
        $role = $request->header('X-User-Role');

        // Comprobamos si su rol es 'admin'
        if ($role !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        // Si es admin, le dejamos pasar al siguiente paso (el controlador)
        return $next($request);
    }
}
