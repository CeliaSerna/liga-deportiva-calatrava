<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class JugadorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jugadores = \App\Models\Jugador::all();
        return response()->json($jugadores, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //requisitos de validación para crear un jugador
        $validatedData = $request->validate([
        'nombre'   => 'required|string|min:3',
        'posicion' => 'required|string',
        'club_id'  => 'required|exists:clubs,id'
    ]);
    // llega aquí si ha pasado la validación
    $jugador = Jugador::create($validatedData);
    return response()->json($jugador, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
