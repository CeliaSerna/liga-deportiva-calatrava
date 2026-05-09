import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Añadimos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ClubService } from '../../services/club.service'; 

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rol.html',
  styleUrl: './rol.css',
})
export class RolComponent implements OnInit {
  usuario: string = '';
  rol: number = 0;
  listaClubs: any[] = []; 

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubService,
    private cdr: ChangeDetectorRef // 2. Inyectamos el detector de cambios
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {  
      this.usuario = params['usuario'] || '';
      this.rol = params['rol'] !== undefined ? +params['rol'] : 0;
      
      this.cargarClubs();
    });
  }

  cargarClubs() {
    this.clubService.getClubs().subscribe({
      next: (data: any) => {
        console.log('1. Datos recibidos de la API:', data);
        
        // Forzamos la conversión a array
        const tempArray = Array.isArray(data) ? data : (data ? [data] : []);
        
        // Asignamos a la variable de la clase
        this.listaClubs = tempArray;
        
        console.log('2. Variable listaClubs actualizada:', this.listaClubs);

        // 3. Forzamos a Angular a que pinte los cambios ahora mismo
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar clubes', err);
        this.listaClubs = [];
      }
    });
  }
}