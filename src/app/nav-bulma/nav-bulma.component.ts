import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bulma',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bulma.component.html',
  styleUrl: './nav-bulma.component.scss'
})
export class NavBulmaComponent {
  exitApp(): void {
   window.open('about:blank', '_blank');
  }

}


