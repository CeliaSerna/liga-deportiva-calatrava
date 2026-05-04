import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  // 
  private apiUrl = `${environment.apiUrl}/jugadores`;

  constructor(private http: HttpClient) { }

  // El servicio se encarga de la petición HTTP
  getJugadores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}