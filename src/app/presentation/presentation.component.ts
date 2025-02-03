import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component'; 
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  standalone: true,
  imports: [NavbarComponent, FooterComponent]
})
export class PresentationComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
















