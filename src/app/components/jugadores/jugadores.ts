import { Component, OnInit  } from '@angular/core';
import { JugadoresService } from '../../services/jugadores.service'; // IMPORTAMOS EL SERVICIO
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jugadores',
  imports: [CommonModule],
  templateUrl: './jugadores.html',
  styleUrl: './jugadores.css',
})
export class JugadoresComponent implements OnInit {
  jugadores: any[] = [];

  // INYECTAMOS EL SERVICIO (Comunicación Componente-Servicio)
  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    // El componente le pide los datos al servicio
    this.jugadoresService.getJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }
}
