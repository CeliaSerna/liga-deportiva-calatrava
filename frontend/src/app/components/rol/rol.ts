import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rol.html',
  styleUrl: './rol.css',
})
export class RolComponent {
  usuario: string = '';
  rol: string = '';

 constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {  
    this.usuario = params['usuario'];
    this.rol = params ['rol'];
  });
 }
}  