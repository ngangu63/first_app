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
    { name: 'John Doe', role: 'Developer', location: 'New York', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Jane Smith', role: 'Designer', location: 'San Francisco', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Alice Johnson', role: 'Manager', location: 'Chicago', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Bob Brown', role: 'Tester', location: 'Austin', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Carol White', role: 'HR', location: 'Boston', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Dave Black', role: 'CTO', location: 'Seattle', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Emma Green', role: 'Support', location: 'Miami', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Frank Gray', role: 'Sales', location: 'Denver', imageUrl: 'assets/images/remy_IMG_1871.jpg' },

    { name: 'John2 Doe', role: 'Developer', location: 'New York', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Jane2 Smith', role: 'Designer', location: 'San Francisco', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Alice2 Johnson', role: 'Manager', location: 'Chicago', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Bob2 Brown', role: 'Tester', location: 'Austin', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Carol2 White', role: 'HR', location: 'Boston', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Dave2 Black', role: 'CTO', location: 'Seattle', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Emma2 Green', role: 'Support', location: 'Miami', imageUrl: 'assets/images/remy_IMG_1871.jpg' },
    { name: 'Frank2 Gray', role: 'Sales', location: 'Denver', imageUrl: 'assets/images/remy_IMG_1871.jpg' },


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
}
