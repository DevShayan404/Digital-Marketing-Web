import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'DmmWebsite';

  // customOptions: OwlOptions = {
  //   items: 20,
  //   loop: true,
  //   dots: true,
  //   nav: true,
  //   margin: 10,
  // }
  customOptions: any = {
    loop: true,
    dots: false,
    navSpeed: 500,
    navText: ['<i class="bx bx-chevron-left"></i>', '<i class="bx bx-chevron-right"></i>'],
    nav: true,
    items: 12,
  }


  ngOnInit(): void {
    
  }

  images = [
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    { src: 'assets/images/card1.webp', alt: 'Image 1' },
    { src: 'assets/images/card2.webp', alt: 'Image 2' },
    { src: 'assets/images/card3.webp', alt: 'Image 3' },
    // add more images as needed
  ];
  carouselImageShow:any
  sliderImage(data:any){
    console.log(data);
    this.carouselImageShow = data;
    
  }
  carouselModa = true
  carouselSliderModal(){
    this.carouselModa = false
  }






}
