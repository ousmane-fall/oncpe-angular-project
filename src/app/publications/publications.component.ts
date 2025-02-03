import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicationsService } from '../services/publications.service';
import { Publication, PublicationItem } from '../services/publication.model';

@Component({
  selector: 'app-publications',
  standalone: true,
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  imports: [CommonModule, HttpClientModule],
})
export class PublicationsComponent implements OnInit {
  publications: PublicationItem[] = []; // Liste des éléments individuels de publication

  constructor(private publicationsService: PublicationsService) {
    console.log('PublicationsComponent chargé !');
  }

  ngOnInit(): void {
    this.publicationsService.getPublications().subscribe(
      (data: Publication[]) => {
        console.log('Données récupérées depuis le backend:', data);
        if (data && data.length > 0) {
          const mainData = data[0];
          this.publications = mainData.publications; // Extraction de la liste des publications
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des publications:', error);
      }
    );
  }
}
