import { Component, OnInit  } from '@angular/core';
import { JugadoresService } from '../../services/jugadores.service'; // IMPORTAMOS EL SERVICIO
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jugadores',
  imports: [CommonModule],
  templateUrl: './jugadores.html',
  styleUrl: './jugadores.css',
})
export class JugadoresComponent implements OnInit { //lista fija de jugadores para no tener que esperar al servidor
  jugadores: any[] = [
    { id: '1', nombre: 'Luis Gómez', equipo: 'Tigres FC' },
    { id: '2', nombre: 'Carlos Soto', equipo: 'Leones Club' },
    { id: '3', nombre: 'Mario Ruiz', equipo: 'Águilas Juveniles' },
    { id: '4', nombre: 'Iván Torres', equipo: 'Halcones Club' },
    { id: '5', nombre: 'Nerea Camacho', equipo: 'Coyotes Junior' },
  ];

  // INYECTAMOS EL SERVICIO (Comunicación Componente-Servicio)
  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    //Mantenemos la llamada al servicio pero NO sobrescribimos la lista 
    this.jugadoresService.getJugadores().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.jugadores = data; // Si el servidor responde, usa los jugadores del servidor
        }
      },
      error: (err) => {
        console.log('Usando lista fija de reserva'); // Si el servidor falla, la lista de arriba se queda puesta
      }
    });
  }
}
