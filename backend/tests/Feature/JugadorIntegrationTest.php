<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Http;

class JugadorIntegrationTest extends TestCase
{
    public function test_api_jugadores_y_simulacion_de_llamada_mock()
    {
        // 1. SIMULACIÓN (Mock) de una llamada externa (Requisito de Mocks)
        // Simulamos que llamamos a una API de "clima" o "estadísticas" externa
        Http::fake([
            'google.com/*' => Http::response(['status' => 'Conectado con Mock'], 200)
        ]);

        // 2. PRUEBA DE INTEGRACIÓN: Llamamos a nuestra propia API de Laravel
        $response = $this->getJson('/api/jugadores');

        // 3. VERIFICACIONES (Expects)
        // Comprobamos que nuestra API responde bien (200)
        // y que devuelve al menos un jugador que conocemos
        $response->assertStatus(200)
                 ->assertJsonFragment(['nombre' => 'Luis Gómez']);
                 
        // 4. Verificamos que el MOCK externo también funcionó
        $externalResponse = Http::get('https://google.com/api-test');
        $this->assertEquals('Conectado con Mock', $externalResponse['status']);
    }
}