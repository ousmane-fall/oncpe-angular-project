import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualitesService } from '../services/actualites.service';
import { Actualite, ActualitesResponse } from '../services/actualites.model';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ActualitesComponent implements OnInit {
  actualites: Actualite[] = [];  // Initialisation avec un tableau vide
  expandedIndex: number | null = null;

  constructor(private actualitesService: ActualitesService) { }

  ngOnInit(): void {
    this.loadActualites();
  }

  loadActualites(): void {
    this.actualitesService.getActualites().subscribe(
      (data: ActualitesResponse[]) => {
        console.log('Données récupérées depuis l\'API:', data);

        // Vérifie si la réponse contient un tableau d'actualités
        if (data && Array.isArray(data)) {
          this.actualites = data.flatMap((response: ActualitesResponse) => response.actualites);
          console.log('Actualités récupérées:', this.actualites);
        } else {
          console.error('Format de réponse inattendu. Les données doivent être un tableau d\'actualités:', data);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des actualités:', error);
      }
    );
  }

  toggleDescription(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
