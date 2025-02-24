export interface Actualite {
  _id: string;
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  image: string;
  description: string;
  link?: string;
}

export interface ActualitesResponse {
  actualites: Actualite[];  // Réponse contenant une clé 'actualites' avec un tableau d'actualités
}
