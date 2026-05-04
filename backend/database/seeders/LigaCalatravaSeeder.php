<?php

namespace Database\Seeders;
use App\Models\Club;
use App\Models\Jugador;
use App\Models\Liga;
use App\Models\Partido;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LigaCalatravaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
{
    // 1. Crear Clubes 
    $clubLocalFutbol = Club::create([        //equipo de futbol
        'nombre' => 'Tigres FC',
        'ciudad' => 'Ciudad Real',
        'categoria' => 'Preferente'
    ]);

    $clubVisitanteFutbol = Club::create([      //equipo de futbol
        'nombre' => 'Leones Club',
        'ciudad' => 'Daimiel',
        'categoria' => 'Preferente'
    ]);

     $clubLocalBaloncesto = Club::create([     //equipo de baloncesto
        'nombre' => 'Águilas Juveniles',
        'ciudad' => 'Ciudad Real',
        'categoria' => 'Preferente'
    ]);

    // 2. Crear Jugadores
    Jugador::create([                    // jugador de futbol
        'nombre' => 'Luis Gómez',
        'posicion' => 'Delantero',
        'dorsal' => 9,
        'club_id' => $clubLocalFutbol->id
    ]);

    Jugador::create([                   // jugador de futbol
        'nombre' => 'Carlos Soto',
        'posicion' => 'Defensa',
        'dorsal' => 11,
        'club_id' => $clubVisitanteFutbol->id
    ]);

     Jugador::create([                // jugador de baloncesto
        'nombre' => 'Mario Ruiz',
        'posicion' => 'Base',
        'dorsal' => 4,
        'club_id' => $clubLocalBaloncesto->id
    ]);

    // 3. Crear una Liga
    $liga = Liga::create([
        'nombre' => 'Liga de Fútbol Calatrava',
        'deporte' => 'Fútbol',
        'temporada' => '2025-2026'
    ]);

    // 4. Crear un Partido
    Partido::create([                     // partido de futbol
        'liga_id' => $liga->id,
        'club_local_id' => $clubLocalFutbol->id,
        'club_visitante_id' => $clubVisitanteFutbol->id,
        'fecha' => now(),
        'resultado' => '0-1'
    ]);
}
}

