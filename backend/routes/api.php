<?php
    
use App\Http\Controllers\Api\ClubController;
use App\Http\Controllers\Api\JugadorController;
use App\Http\Controllers\Api\LigaController;
use App\Http\Controllers\Api\PartidoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Rutas públicas (Cualquiera puede verlas)
Route::get('clubs', [ClubController::class, 'index']);
Route::get('jugadores', [JugadorController::class, 'index']);
Route::get('ligas', [LigaController::class, 'index']);
Route::get('partidos', [PartidoController::class, 'index']);

// Rutas protegidas (Solo para administradores)
Route::middleware(['admin'])->group(function () {   
    Route::post('clubs', [ClubController::class, 'store']);      // Crear
    Route::put('clubs/{club}', [ClubController::class, 'update']); // Editar
    Route::delete('clubs/{club}', [ClubController::class, 'destroy']); // Borrar
});