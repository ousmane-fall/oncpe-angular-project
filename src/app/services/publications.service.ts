import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import correct pour les appels API
import { Observable } from 'rxjs';
import { Publication } from './publication.model'; // Modèle TypeScript pour les publications

@Injectable({
  providedIn: 'root', // Fournisseur global pour l'injection
})
export class PublicationsService {
  private apiUrl = 'http://localhost:4200/api/publications'; // URL de l'API backend pour les publications

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer toutes les publications
  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.apiUrl);
  }

  // Méthode pour ajouter une nouvelle publication
  addPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.apiUrl, publication);
  }

  // Méthode pour obtenir une publication spécifique par ID
  getPublicationById(id: string): Observable<Publication> {
    return this.http.get<Publication>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour mettre à jour une publication
  updatePublication(id: string, publication: Publication): Observable<Publication> {
    return this.http.put<Publication>(`${this.apiUrl}/${id}`, publication);
  }

  // Méthode pour supprimer une publication
  deletePublication(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
