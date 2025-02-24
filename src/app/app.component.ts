import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { PublicationsComponent } from './publications/publications.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { ParcoursCPEComponent } from './parcours-cpe/parcours-cpe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, 
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PresentationComponent,
    ActualitesComponent,
    PublicationsComponent,
    RessourcesComponent,
    AdminDashboardComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oncpe-angular-project';
}

