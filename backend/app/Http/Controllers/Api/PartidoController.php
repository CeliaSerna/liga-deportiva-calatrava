<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Partido;

class PartidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Partido::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Requisitos de validación para crear un partido
        $validatedData = $request->validate([
        'club_local_id'    => 'required|exists:clubs,id',
        'club_visitante_id'=> 'required|exists:clubs,id',
        'fecha'            => 'required|date',
        'resultado'        => [
            'required',
            'string',
            'regex:/^\d+-\d+$/' // Esto obliga a que sea "número-número"
        ],
    ]);
        // llega aquí si ha pasado la validación
    $partido = Partido::create($validatedData);
    return response()->json($partido, 201);
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
