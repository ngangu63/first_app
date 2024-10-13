import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NavBulmaComponent } from "../nav-bulma/nav-bulma.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, NavBulmaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
