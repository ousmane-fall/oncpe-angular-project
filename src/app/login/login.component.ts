// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Si standalone, importer FormsModule

@Component({
  selector: 'app-login',
  standalone: true,  // Si ton composant est standalone (Angular 17+)
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule]  // Pour utiliser ngModel dans le template
})
export class LoginComponent {
  // Objet pour les identifiants
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    // Appeler login en passant les deux arguments séparément
    this.authService.login(this.user.username, this.user.password).subscribe({
      next: (response: any) => {
        // Stocke le rôle retourné par l'API
        this.authService.setUserRole(response.role);
        // Redirection selon le rôle
        if (response.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (err: any) => { // Typage explicite pour 'err'
        console.error("Erreur lors de la connexion :", err);
      }
    });
  }
}
