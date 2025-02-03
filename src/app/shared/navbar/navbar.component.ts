import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None, // Désactive l'encapsulation
  standalone: true,
  imports: [
    CommonModule,  // Pour utiliser *ngIf et *ngFor
    RouterModule   // Pour utiliser routerLink et routerLinkActive
  ]
})
export class NavbarComponent {
  currentPage: string = 'home'; // Propriété pour gérer la page active
  isScrolled = false; // Propriété pour gérer l'état sticky de la navbar

  constructor(private router: Router) { }

  // Détecter le scroll pour ajouter une classe sticky
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollPosition > 50; // Active la classe sticky après 50px de scroll
  }

  // Fonction pour défiler vers une section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Fonction pour changer dynamiquement le style d'un bouton
  changeButtonStyle(event: MouseEvent): void {
    const button = event.target as HTMLElement;
    button.classList.remove('btn-outline-dark');
    button.classList.add('btn-primary');
    button.style.color = '#fff';
  }

  // Fonction pour naviguer vers une route et mettre à jour la page active
  navigateTo(route: string): void {
    this.currentPage = route;
    this.router.navigate([route]);
  }
}
