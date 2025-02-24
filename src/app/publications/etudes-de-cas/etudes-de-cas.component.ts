import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { Publication } from '../../services/publications.model';


@Component({
  selector: 'app-etudes-de-cas',
  standalone: true,
  imports: [],
  templateUrl: './etudes-de-cas.component.html',
  styleUrl: './etudes-de-cas.component.scss'
})
export class EtudesDeCasComponent implements OnInit {
  publications: Publication[] = [];
  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsService.getPublicationsByCategory('Etudes de cas')
      .subscribe((data) => {
        this.publications = data;
      });
  }
}
