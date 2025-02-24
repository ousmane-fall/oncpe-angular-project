import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicationsService } from '../services/publications.service';
import { ActivatedRoute } from '@angular/router';
import { ChiffresClesComponent } from './chiffres-cles/chiffres-cles.component';  // Assurez-vous de l'importer
import { EtudesDeCasComponent } from './etudes-de-cas/etudes-de-cas.component';  // Assurez-vous de l'importer
import { AnalysesThematiquesComponent } from './analyses-thematiques/analyses-thematiques.component';  // Assurez-vous de l'importer

@Component({
  selector: 'app-publications',
  standalone: true,
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    ChiffresClesComponent,  // Ajoutez ces composants si vous souhaitez les utiliser dans ce composant
    EtudesDeCasComponent,
    AnalysesThematiquesComponent,
  ],
})
export class PublicationsComponent implements OnInit {
  filteredPublications: any[] = [];  // Publications filtrées selon la catégorie
  selectedCategory: string = ''; // Catégorie sélectionnée, récupérée depuis la route
  publications: any[] | undefined;
  categories: string[] = ['Chiffres clés', 'Etudes de cas', 'Analyses thématiques']; // Définir les catégories disponibles


  constructor(
    private publicationsService: PublicationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Récupérer la catégorie depuis les paramètres de la route
    this.selectedCategory = this.route.snapshot.paramMap.get('category') || 'Etudes de cas';  // Valeur par défaut

    // Récupérer les publications pour la catégorie sélectionnée
    this.publicationsService.getPublicationsByCategory(this.selectedCategory).subscribe((data: any[]) => {
      this.filteredPublications = data;
    });
  }

  loadPublicationsByCategory(): void {
    this.publicationsService.getPublicationsByCategory(this.selectedCategory).subscribe(
      (data) => {
        this.publications = data; // Affecte les publications filtrées
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications', error);
      }
    );
  }

  // Méthode pour changer la catégorie et charger les publications correspondantes
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.loadPublicationsByCategory(); // Recharger les publications selon la nouvelle catégorie
  }
}
