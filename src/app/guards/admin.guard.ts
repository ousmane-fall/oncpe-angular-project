import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    //  Vérifie si on est bien dans un navigateur avant d’accéder à localStorage
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const userRole = localStorage.getItem('role'); // Récupérer le rôle de l'utilisateur
      if (userRole === 'admin') {
        return true; //  Accès autorisé
      }
    }

    //  Si non-admin ou localStorage indisponible, redirection vers /home
    this.router.navigate(['/home']);
    return false;
  }
}
