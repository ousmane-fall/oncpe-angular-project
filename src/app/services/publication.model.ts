export interface PublicationItem {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
  downloadFile: string;
  documentId: number;
}

export interface Publication {
  tags: string[];
  _id: string;
  title: string;
  publications: PublicationItem[];
  date: string;
}
