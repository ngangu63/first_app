import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';



export interface Picture {
  name: string;
  role: string;
  location: string;
  imageUrl: string;
  defaultImage: string;
}


@Component({
  selector: 'app-picture-slider',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './picture-slider.component.html',
  styleUrl: './picture-slider.component.scss'
})
export class PictureSliderComponent {
       
     numberpicture = 4;
    
  

  pictures: Picture[] = [
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: 'assets/images/DedeKavunguImag.jpg' , defaultImage: 'assets/images/Remy_Cravate1.jpg'},
    { name: 'Germaine Nsenga', role: 'Conseillère , ', location: 'France', imageUrl: 'assets/images/NsengaGermaine2Img.jpg' , defaultImage: 'assets/images/Remy_Cravate1.jpg'},
    { name: 'Remy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/Remy_Cravate1.jpg', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Léopold Ngoma', role: 'Président , ', location: 'Royaume-Uni', imageUrl: '', defaultImage: 'assets/images/DedeKavunguImag.jpg' },
    { name: 'Junior Nzingu', role: 'Vice-Président Afrique , ', location: 'DR Congo', imageUrl: '' , defaultImage: 'assets/images/DedeKavunguImag.jpg'},
    { name: 'Gerry Mabiala', role: 'Vice-Président Amerique , ', location: "États-Unis", imageUrl: '', defaultImage: 'assets/images/DedeKavunguImag.jpg' },
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: 'assets/images/DedeKavunguImag.jpg' , defaultImage: 'assets/images/DedeKavunguImag.jpg'},
    { name: 'Pascal Mieluzeyi', role: 'Secrétaire , ', location: 'Canada', imageUrl: '' , defaultImage: 'assets/images/DedeKavunguImag.jpg'},
    { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: '' , defaultImage: 'assets/images/DedeKavunguImag.jpg'},
    { name: 'Mitouche', role: 'Commissaire aux comptes , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/DedeKavunguImag.jpg' },
    { name: 'Remy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/Remy_Cravate1.jpg', defaultImage: 'assets/images/DedeKavunguImag.jpg' },
    { name: 'Daniel Meboya', role: 'Coordonnateur  , ', location: 'Ouganda', imageUrl: '' , defaultImage: 'assets/images/DedeKavunguImag.jpg'},
    
    
    { name: 'Niko', role: 'Conseiller , ', location: 'France', imageUrl: '' , defaultImage: 'assets/images/DedeKavunguImag.jpg'},
    { name: 'Mathieu Tusalamo', role: 'Conseiller , ', location: 'DR Congo', imageUrl: '' , defaultImage: 'assets/images/DedeKavunguImag.jpg'},
    
    
    

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
