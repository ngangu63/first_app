import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bulma',
  standalone: true,
  imports: [],
  templateUrl: './nav-bulma.component.html',
  styleUrl: './nav-bulma.component.scss'
})
export class NavBulmaComponent {
  exitApp(): void {
   window.open('about:blank', '_blank');
  }

}


