export interface Publication {
  _id: string;
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  downloadFile: string;
  documentId: number;
  subtitle?: string;
}

export interface PublicationsResponse {
  publications: Publication[];  // La clé 'publications' contient un tableau de publications
}
