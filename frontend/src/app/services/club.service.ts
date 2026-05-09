import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private apiUrl = 'http://localhost:8000/api/clubs';

  constructor(private http: HttpClient) { }

  getClubs(): Observable<any> {
    // Es importante enviar el Token que guardaste en el login
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get(this.apiUrl, { headers });
  }
}