import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './app.routes';
import { HttpInterceptor } from './http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configuration du routage
    provideHttpClient(withFetch()), // Utilisation de l'API fetch pour HttpClient
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }, // Intercepteur pour les requêtes HTTP
  ],
};
