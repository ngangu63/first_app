import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Picture {
  name: string;
  role: string;
  location: string;
  imageUrl: string;
}


@Component({
  selector: 'app-picture-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-slider.component.html',
  styleUrl: './picture-slider.component.scss'
})
export class PictureSliderComponent {
       
     numberpicture = 4;

  pictures: Picture[] = [
    { name: 'Léopold Ngoma', role: 'Président , ', location: 'Royaume-Uni', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Junior Nzingu', role: 'Vice-Président Afrique , ', location: 'DR Congo', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Gerry Mabiala', role: 'Vice-Président Amerique , ', location: "États-Unis", imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Pascal Mieluzeyi', role: 'Secrétaire , ', location: 'Canada', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Mitouche', role: 'Commissaire aux comptes , ', location: 'France', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Remy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Daniel Meboya', role: 'Coordonnateur  , ', location: 'Ouganda', imageUrl: 'assets/images/IMG_1608.jpeg' },
    
    
    { name: 'Niko', role: 'Conseiller , ', location: 'France', imageUrl: 'assets/images/IMG_1608.jpeg' },
    { name: 'Mathieu Tusalamo', role: 'Conseiller , ', location: 'DR Congo', imageUrl: 'assets/images/IMG_1608.jpeg' },
    
    
    

  ];

  currentSlideIndex = 0;

  get currentPictures(): Picture[] {
    const start = this.currentSlideIndex * this.numberpicture ;
    return this.pictures.slice(start, start + this.numberpicture );
  }

  nextSlide() {
    if ((this.currentSlideIndex + 1) * this.numberpicture < this.pictures.length) {
      this.currentSlideIndex++;
    }
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  openPicture(picture: Picture): void {
    const popup = window.open('', '_blank', 'width=400,height=400');
    if (popup) {
      popup.document.write(`
        <html>
          <head>
            <title>${picture.name}</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; }
              img { width: 100%; height: auto; }
            </style>
          </head>
          <body>
            <h2>${picture.name}</h2>
            <p>Role: ${picture.role}</p>
            <p>Location: ${picture.location}</p>
            <img src="${picture.imageUrl}" alt="${picture.name}" />
          </body>
        </html>
      `);
      popup.document.close();
    }
  }
}
