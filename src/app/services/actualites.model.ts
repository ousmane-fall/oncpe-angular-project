export interface Actualite {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  image: string;
  description: string;
  link?: string;
  expanded?: boolean;
}

export interface ActualitesResponse {
  _id: string;
  title: string;
  actualites: Actualite[];
}
