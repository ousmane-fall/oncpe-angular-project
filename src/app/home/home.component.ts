import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, NavbarComponent, FooterComponent]
})
export class HomeComponent {
  constructor() { }
}
