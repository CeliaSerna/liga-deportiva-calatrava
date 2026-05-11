import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private apiUrl = `${environment.apiUrl}/clubs`; // url definida en environment.prod.ts

  constructor(private http: HttpClient) { }

  // Método para obtener cabeceras con el Token 
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getClubs(): Observable<any> {    
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  // registrar un club
  createClub(clubData: any): Observable<any> {
    return this.http.post(this.apiUrl, clubData, { headers: this.getHeaders() });
  }
}