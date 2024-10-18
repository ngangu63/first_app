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
    { name: 'Léopold Ngoma', role: 'Président , ', location: 'Royaume-Uni', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Junior Nzingu', role: 'Vice-Président Afrique , ', location: 'Kinshasa', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Gerry Mabiala', role: 'Vice-Président Amerique , ', location: "États-Unis", imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Pascal Mieluzeyi', role: 'Secrétaire , ', location: 'Canada', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Mitouche', role: 'Commissaire aux comptes , ', location: 'France', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Remy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Daniel Meboya', role: 'Conseiller , ', location: 'Kinshasa', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    
    
    { name: 'Niko', role: 'Conseiller , ', location: 'France', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Mathieu Tusalamo', role: 'Conseiller , ', location: 'Kinshasa', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    
    
    

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
