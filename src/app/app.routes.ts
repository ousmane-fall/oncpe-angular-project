import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { PublicationsComponent } from './publications/publications.component';
import { RessourcesComponent } from './ressources/ressources.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // ✅ Corrigé pour éviter le conflit
  { path: 'home', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'ressources', component: RessourcesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] }, // ✅ Protégé par AdminGuard
];
