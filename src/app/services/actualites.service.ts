import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actualite, ActualitesResponse } from './actualites.model'; // Modèle Actualite
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActualitesService {
  private apiUrl = 'http://localhost:4200/api/actualites'; // URL du backend pour les actualités

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer toutes les actualités
  getActualites(): Observable<ActualitesResponse[]> {
    return this.http.get<ActualitesResponse[]>(this.apiUrl);
  }



  // Méthode pour ajouter une nouvelle actualité
  addActualite(actualite: Actualite): Observable<Actualite> {
    return this.http.post<Actualite>(this.apiUrl, actualite);
  }

  // Méthode pour obtenir une actualité spécifique par ID
  getActualiteById(id: string): Observable<Actualite> {
    return this.http.get<Actualite>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour mettre à jour une actualité
  updateActualite(id: string, actualite: Actualite): Observable<Actualite> {
    return this.http.put<Actualite>(`${this.apiUrl}/${id}`, actualite);
  }

  // Méthode pour supprimer une actualité
  deleteActualite(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
