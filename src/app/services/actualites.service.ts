import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActualitesResponse } from './actualites.model'; // Importez votre modèle

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
  addActualite(actualite: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, actualite);
  }

  // Méthode pour obtenir une actualité spécifique par ID
  getActualiteById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour mettre à jour une actualité
  updateActualite(id: string, actualite: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, actualite);
  }

  // Méthode pour supprimer une actualité
  deleteActualite(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
