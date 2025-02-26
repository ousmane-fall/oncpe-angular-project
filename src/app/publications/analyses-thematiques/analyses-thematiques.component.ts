import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { Publication, PublicationsResponse } from '../../services/publications.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analyses-thematiques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analyses-thematiques.component.html',
  styleUrl: './analyses-thematiques.component.scss'
})
export class AnalysesThematiquesComponent implements OnInit {
  publications: Publication[] = [];
  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsService.getPublicationsByCategory('analyses-thematiques').subscribe(
      (response: PublicationsResponse) => {
        this.publications = response.publications; // Extraire 'publications' du response
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications', error);
      }
    );
  }
}
