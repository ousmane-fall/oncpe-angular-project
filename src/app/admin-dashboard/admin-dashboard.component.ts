import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; //  Importer FormsModule
import { ActualitesService } from '../services/actualites.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true, //  Composant autonome
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  imports: [NgIf, NgFor, FormsModule] // Ajouter FormsModule ici
})
export class AdminDashboardComponent implements OnInit {
  actualites: any[] = [];
  newActualite = { title: '', description: '' };

  constructor(private actualitesService: ActualitesService) { }

  ngOnInit() {
    this.fetchActualites();
  }

  fetchActualites() {
    this.actualitesService.getActualites().subscribe((data: any[]) => {
      this.actualites = data;
    });
  }

  addActualite() {
    this.actualitesService.addActualite(this.newActualite).subscribe(() => {
      this.fetchActualites();
      this.newActualite = { title: '', description: '' };
    });
  }

  deleteActualite(id: string) {
    this.actualitesService.deleteActualite(id).subscribe(() => {
      this.fetchActualites();
    });
  }
}
