import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActualitesService } from '../services/actualites.service';
import { PublicationsService } from '../services/publications.service';
import { Actualite } from '../services/actualites.model';
import { Publication, PublicationsResponse } from '../services/publications.model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  imports: [NgIf, NgFor, FormsModule]
})
export class AdminDashboardComponent implements OnInit {
  actualites: Actualite[] = [];
  publications: Publication[] = [];

  // Objets modèles pour les formulaires d’ajout
  newActualite: Actualite = {
    _id: '',          // Initialisation de _id
    id: '',           // Initialisation de id
    title: '',        // Titre
    subtitle: '',
    description: '',  // Description
    image: '',        // Image
    date: ''          // Date
  };

  newPublication: Publication = {
    _id: '',           // Initialisation de _id
    id: '',            // Initialisation de id
    title: '',         // Titre
    date: '',          // Date de publication
    image: '',         // Image
    description: '',   // Description
    downloadFile: '',  // Fichier de téléchargement
    documentId: 0      // ID du document
  };

  constructor(
    private actualiteService: ActualitesService,
    private publicationService: PublicationsService
  ) { }

  ngOnInit(): void {
    this.loadActualites();
    this.loadPublications();
  }

  loadActualites(): void {
    this.actualiteService.getActualites().subscribe(
      (response) => {
        console.log('Actualités récupérées:', response);
        // On suppose que response est un tableau d'objets ActualitesResponse
        this.actualites = response.flatMap((actualitesResponse) => actualitesResponse.actualites);
        console.log('Toutes les actualités fusionnées:', this.actualites);
      },
      (error: any) => console.error('Erreur lors de la récupération des actualités:', error)
    );
  }

  loadPublications(): void {
    this.publicationService.getPublications().subscribe(
      (response: PublicationsResponse): void => {  // On s'attend à une réponse de type PublicationsResponse
        console.log('Données récupérées depuis l\'API:', response);

        // Vérifier si la réponse contient un tableau de publications
        if (response && response.publications && Array.isArray(response.publications)) {
          this.publications = response.publications;  // Extraire la clé 'publications' de la réponse
          console.log('Publications récupérées:', this.publications);
        } else {
          console.error('Format de réponse invalide. Attendu un tableau sous la clé "publications".');
        }
      },
      (error: any) => console.error('Erreur lors de la récupération des publications:', error)
    );
  }

  addActualite(): void {
    if (this.newActualite.title && this.newActualite.description) {
      this.actualiteService.addActualite(this.newActualite).subscribe(
        (data: Actualite) => {  // Type explicite pour data
          this.actualites.push(data);
          this.resetActualiteForm();
        },
        (error: any) => console.error(error)  // Type explicite pour error
      );
    } else {
      console.log('Veuillez remplir tous les champs nécessaires.');
    }
  }

  resetActualiteForm(): void {
    this.newActualite = {
      _id: '',
      id: '',
      title: '',
      subtitle: '',
      description: '',
      image: '',
      date: ''
    };
  }

  deleteActualite(id: string): void {
    this.actualiteService.deleteActualite(id).subscribe(
      () => {
        this.actualites = this.actualites.filter(act => act._id !== id);
      },
      (error: any) => console.error(error)  // Type explicite pour error
    );
  }

  addPublication(): void {
    if (this.newPublication.title && this.newPublication.description) {
      this.publicationService.addPublication(this.newPublication).subscribe(  // Appel de addPublication
        (data: Publication) => {  // Type explicite pour data
          this.publications.push(data);
          this.resetPublicationForm();
        },
        (error: any) => console.error(error)  // Type explicite pour error
      );
    } else {
      console.log('Veuillez remplir tous les champs nécessaires.');
    }
  }

  resetPublicationForm(): void {
    this.newPublication = {
      _id: '',
      id: '',
      title: '',
      date: '',
      image: '',
      description: '',
      downloadFile: '',
      documentId: 0
    };
  }

  deletePublication(id: string): void {
    this.publicationService.deletePublication(id).subscribe(  // Appel de deletePublication
      () => {
        this.publications = this.publications.filter(pub => pub._id !== id);
      },
      (error: any) => console.error(error)  // Type explicite pour error
    );
  }
}
