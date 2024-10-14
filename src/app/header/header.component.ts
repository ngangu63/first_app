import { Component } from '@angular/core';
import { NavBulmaComponent } from "../nav-bulma/nav-bulma.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBulmaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
