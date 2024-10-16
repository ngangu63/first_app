import { Component  } from '@angular/core';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {
  
  slideIndex = 1;
  mySlides;
  fade;
  dot;

  currentSlide(value: number){
   this.showSlides(this.slideIndex);
  }

  showSlides(value: number){
    let i;
    //let slides = document.getElementsByClassName("mySlides");
    this.mySlides
    

  }

   
}



/* let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} */