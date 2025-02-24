import { Component, OnInit } from '@angular/core';
import { ParcoursService } from '../services/parcours.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-parcours-cpe',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './parcours-cpe.component.html',
  styleUrl: './parcours-cpe.component.scss'
})
export class ParcoursCPEComponent implements OnInit {
  parcours: any[] = [];
  selectedType: string = 'public';  // Par défaut, on affiche le parcours pour les maîtres d'ouvrage publics

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit(): void {
    this.loadParcours();  // Charger le parcours par défaut (public)
  }

  // Charger les étapes du parcours en fonction du type de maître d'ouvrage
  loadParcours(): void {
    this.parcoursService.getParcoursByType(this.selectedType).subscribe(data => {
      this.parcours = data;
    });
  }

  // Changer le type de maître d'ouvrage et recharger le parcours
  onTypeChange(type: string): void {
    this.selectedType = type;
    this.loadParcours();
  }
}
