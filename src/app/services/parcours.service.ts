import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  private apiUrl = 'http://localhost:4200/api/parcours';  

  constructor(private http: HttpClient) { }

  // Récupérer toutes les étapes
  getParcours(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Récupérer les étapes par type (public, privé, copropriété)
  getParcoursByType(type: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${type}`);
  }
}
