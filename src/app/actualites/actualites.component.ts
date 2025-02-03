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
  actualites: Actualite[] = [];
  expandedIndex: number | null = null;

  constructor(private actualitesService: ActualitesService) { }

  ngOnInit(): void {
    this.actualitesService.getActualites().subscribe({
      next: (data) => {
        this.actualites = data[0]?.actualites || [];
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des actualités :', err);
      }
    });
  }

  toggleDescription(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
