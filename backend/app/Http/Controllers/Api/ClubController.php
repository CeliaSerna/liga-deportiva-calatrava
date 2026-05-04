<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Club;
use Illuminate\Http\Request;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Club::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Requisitos de validación para crear un club
        $validatedData = $request->validate([
        'nombre' => 'required|string|max:255|unique:clubs,nombre',
        'ciudad' => 'required|string|max:255',
        'categoria' => 'required|string|max:100',
    ]);
        // llega aquí si ha pasado la validación
        $club = Club::create($validatedData);
        return response()->json($club, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $club = Club::findOrFail($id);
        return response()->json($club, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $club->update($request->all());
        return response()->json($club, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $club->delete();
        return response()->json(null, 204);
    }
}
