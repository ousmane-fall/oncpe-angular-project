import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { Publication } from '../../services/publications.model';


@Component({
  selector: 'app-chiffres-cles',
  standalone: true,
  imports: [],
  templateUrl: './chiffres-cles.component.html',
  styleUrl: './chiffres-cles.component.scss'
})
export class ChiffresClesComponent implements OnInit {
  publications: Publication[] = []; 
  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsService.getPublicationsByCategory('Chiffres clés')
      .subscribe((data) => {
        this.publications = data;
      });
  }
}
