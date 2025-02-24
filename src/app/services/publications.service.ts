import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import correct pour les appels API
import { Observable } from 'rxjs';
import { Publication, PublicationsResponse } from './publications.model'; // Modèle TypeScript pour les publications
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', // Fournisseur global pour l'injection
})
export class PublicationsService {
  [x: string]: any;
  private apiUrl = 'http://localhost:4200/api/publications'; // URL de l'API backend pour les publications


  // Associations entre les catégories et les documentIds
  private categoryMapping: { [key: string]: string[] } = {  // Ajout de l'index signature ici
    'chiffres-cles': ['DOC_ONCPE_09', 'DOC_ONCPE_05', 'DOC_ONCPE_03', 'DOC_ONCPE_02'],
    'etudes-de-cas': ['DOC_ONCPE_17', 'DOC_ONCPE_16', 'DOC_ONCPE_15', 'DOC_ONCPE_14', 'DOC_ONCPE_13', 'DOC_ONCPE_12'],
    'analyses-thematiques': ['DOC_ONCPE_08', 'DOC_ONCPE_06']
  };

  constructor(private http: HttpClient) { }

  /* Méthode pour récupérer toutes les publications
  getPublications(): Observable<PublicationsResponse> {
    return this.http.get<PublicationsResponse>(this.apiUrl); // L'API renvoie PublicationsResponse
  } */

  // Récupérer les publications par catégorie
  getPublicationsByCategory(category: string): Observable<any[]> {
    const documentIds = this.categoryMapping[category];

    if (!documentIds) {
      return new Observable(); // Retourne un observable vide si la catégorie est invalide
    }

    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      map((data: any[]) => {
        // Filtrer les publications qui correspondent à la catégorie
        return data.filter((publication) => documentIds.includes(publication.id));
      })
    );
  }

  // Si tu veux récupérer toutes les publications (non filtrées)
  getAllPublications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
