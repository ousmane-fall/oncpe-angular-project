import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { Publication, PublicationsResponse } from '../../services/publications.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chiffres-cles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chiffres-cles.component.html',
  styleUrl: './chiffres-cles.component.scss'
})
export class ChiffresClesComponent implements OnInit {
  publications: Publication[] = [];
  constructor(private publicationsService: PublicationsService) { }
  ngOnInit(): void {
    this.publicationsService.getPublicationsByCategory('chiffres-cles').subscribe(
      (response: PublicationsResponse): void => {
        this.publications = response.publications;  // Accéder à 'publications' et l'assigner
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications', error);
      }
    );
  }
}
