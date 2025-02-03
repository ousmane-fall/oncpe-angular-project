import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ressources',
  standalone: true,
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Gestion du fragment
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
