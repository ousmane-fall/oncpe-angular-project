import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { Publication, PublicationsResponse } from '../../services/publications.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-etudes-de-cas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudes-de-cas.component.html',
  styleUrl: './etudes-de-cas.component.scss'
})
export class EtudesDeCasComponent implements OnInit {
  publications: Publication[] = [];
  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsService.getPublicationsByCategory('etudes-de-cas').subscribe(
      (response: PublicationsResponse) => {
        this.publications = response.publications;  // Accéder à 'publications' et l'assigner
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications', error);
      }
    );
  }

}
