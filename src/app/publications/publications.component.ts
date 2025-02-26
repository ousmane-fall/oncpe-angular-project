import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicationsService } from '../services/publications.service';
import { ActivatedRoute } from '@angular/router';
import { ChiffresClesComponent } from './chiffres-cles/chiffres-cles.component';
import { EtudesDeCasComponent } from './etudes-de-cas/etudes-de-cas.component';
import { AnalysesThematiquesComponent } from './analyses-thematiques/analyses-thematiques.component';
import { PublicationsResponse } from '../services/publications.model';

@Component({
  selector: 'app-publications',
  standalone: true,
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    ChiffresClesComponent,
    EtudesDeCasComponent,
    AnalysesThematiquesComponent,
  ],
})
export class PublicationsComponent implements OnInit {
  filteredPublications: any[] = [];  // Publications filtrées selon la catégorie
  selectedCategory: string = ''; // Catégorie sélectionnée, récupérée depuis la route
  categories: string[] = ['Chiffres clés', 'Etudes de cas', 'Analyses thématiques']; // Définir les catégories disponibles

  constructor(
    private publicationsService: PublicationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Récupérer la catégorie depuis les paramètres de la route
    this.selectedCategory = this.route.snapshot.paramMap.get('category') || 'Etudes de cas'; // Valeur par défaut

    // Charger les publications pour la catégorie sélectionnée
    this.publicationsService.getPublicationsByCategory(this.selectedCategory).subscribe(
      (response: PublicationsResponse) => {
        this.filteredPublications = response.publications;  // Extraire 'publications' et l'assigner
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications', error);
      }
    );
  }

  // Méthode pour changer la catégorie et charger les publications correspondantes
  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    // Recharger les publications selon la nouvelle catégorie
    this.publicationsService.getPublicationsByCategory(this.selectedCategory).subscribe(
      (response: PublicationsResponse) => {
        this.filteredPublications = response.publications;  // Extraire 'publications' et l'assigner
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications', error);
      }
    );
  }
}
