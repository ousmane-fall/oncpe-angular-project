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
    console.log("Tentative de connexion avec :", this.user);
    this.authService.login(this.user.username, this.user.password).subscribe({
      next: (response: any) => {
        console.log("Réponse de connexion :", response);
        this.authService.setUserRole(response.role);
        if (response.role === 'admin') {
          console.log("Redirection vers /admin");
          this.router.navigate(['/admin']);
        } else {
          console.log("Redirection vers /home");
          this.router.navigate(['/home']);
        }
      },
      error: (err: any) => {
        console.error("Erreur lors de la connexion :", err);
      }
    });
  }

}
