import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { PublicationsComponent } from './publications/publications.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { ParcoursCPEComponent } from './parcours-cpe/parcours-cpe.component';
import { Routes } from '@angular/router';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { ChoixMarcheComponent } from './choix-marche/choix-marche.component';
import { StrategieRenovationComponent } from './strategie-renovation/strategie-renovation.component';
import { PreparationAmoComponent } from './preparation-amo/preparation-amo.component';
import { AnalysesThematiquesComponent } from './publications/analyses-thematiques/analyses-thematiques.component';
import { ChiffresClesComponent } from './publications/chiffres-cles/chiffres-cles.component';
import { EtudesDeCasComponent } from './publications/etudes-de-cas/etudes-de-cas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'publications/chiffres-cles', component: ChiffresClesComponent },
  { path: 'publications/etudes-de-cas', component: EtudesDeCasComponent },
  { path: 'publications/analyses-thematiques', component: AnalysesThematiquesComponent },
  { path: 'publications', redirectTo: '/publications/chiffres-cles', pathMatch: 'full' },  
  { path: 'ressources', component: RessourcesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },

  {
    path: 'parcours-cpe',
    component: ParcoursCPEComponent,
    children: [
      { path: 'decouverte', component: DecouverteComponent },
      { path: 'strategie-renovation', component: StrategieRenovationComponent },
      { path: 'preparation-amo', component: PreparationAmoComponent },
      { path: 'choix-marche', component: ChoixMarcheComponent },
    ]
  },
];
