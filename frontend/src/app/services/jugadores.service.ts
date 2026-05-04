import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  // URL que no existe pero el Test la capturará
  private apiUrl = 'http://localhost:3000/api/jugadores';

  constructor(private http: HttpClient) { }

  // El servicio se encarga de la petición HTTP
  getJugadores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}