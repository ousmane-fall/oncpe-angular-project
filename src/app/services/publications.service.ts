import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Publication, PublicationsResponse } from './publications.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService {
  private apiUrl = 'http://localhost:4200/api/publications'; // URL de l'API backend pour les publications

  // Associations entre les catégories et les documentIds
  private categoryMapping: { [key: string]: string[] } = {
    'chiffres-cles': ['DOC_ONCPE_09', 'DOC_ONCPE_05', 'DOC_ONCPE_03', 'DOC_ONCPE_02'],
    'etudes-de-cas': ['DOC_ONCPE_17', 'DOC_ONCPE_16', 'DOC_ONCPE_15', 'DOC_ONCPE_14', 'DOC_ONCPE_13', 'DOC_ONCPE_12'],
    'analyses-thematiques': ['DOC_ONCPE_08', 'DOC_ONCPE_06']
  };

  constructor(private http: HttpClient) { }

  // Récupérer toutes les publications
  getPublications(): Observable<PublicationsResponse> {
    return this.http.get<PublicationsResponse>(this.apiUrl);
  }

  // Récupérer les publications par catégorie
  getPublicationsByCategory(category: string): Observable<PublicationsResponse> {
    const documentIds = this.categoryMapping[category];

    if (!documentIds) {
      return throwError(() => new Error('Catégorie invalide'));
    }

    return this.http.get<Publication[]>(this.apiUrl).pipe(
      map((data: Publication[]) => {
        return { publications: data.filter((publication) => documentIds.includes(publication.id)) };
      })
    );
  }

  // Ajouter une publication
  addPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(this.apiUrl, publication);
  }

  // Supprimer une publication
  deletePublication(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
