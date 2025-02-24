import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { Publication } from '../../services/publications.model';

@Component({
  selector: 'app-analyses-thematiques',
  standalone: true,
  imports: [],
  templateUrl: './analyses-thematiques.component.html',
  styleUrl: './analyses-thematiques.component.scss'
})
export class AnalysesThematiquesComponent implements OnInit {
  publications: Publication[] = [];
  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsService.getPublicationsByCategory('Analyses thématiques')
      .subscribe((data) => {
        this.publications = data;
      });
  }
}
