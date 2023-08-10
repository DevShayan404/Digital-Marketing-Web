import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import {
  fadeOut,
  slideInLeft,
  lightSpeedOut,
  slideInDown,
  slideOutRight,
  slideInUp,
  slideInRight,
  zoomIn,
  zoomOut,
} from 'ng-animate';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      transition(
        ':enter',
        useAnimation(slideInLeft, { params: { timing: 0.2, delay: 0 } })
      ),
      transition(
        ':leave',
        useAnimation(slideOutRight, { params: { timing: 0.2, delay: 0 } })
      ),
    ]),
    trigger('slidedown', [
      transition(
        ':enter',
        useAnimation(slideInDown, { params: { timing: 0.2, delay: 0 } })
      ),
      // transition(
      //   ':leave',
      //   useAnimation(lightSpeedOut, { params: { timing: 0.3, delay: 0 } })
      // ),
    ]),
    trigger('slideInLeft', [
      transition(
        ':enter',
        useAnimation(slideInLeft, { params: { timing: 0.2, delay: 0 } })
      ),
      // transition(
      //   ':leave',
      //   useAnimation(lightSpeedOut, { params: { timing: 0.3, delay: 0 } })
      // ),
    ]),
    trigger('slideInUp', [
      transition(
        ':enter',
        useAnimation(slideInUp, { params: { timing: 0.2, delay: 0 } })
      ),
      // transition(
      //   ':leave',
      //   useAnimation(fadeOut, { params: { timing: 0.2, delay: 0 } })
      // ),
    ]),
    trigger('slideInRight', [
      transition(
        ':enter',
        useAnimation(slideInRight, { params: { timing: 0.2, delay: 0 } })
      ),
      // transition(
      //   ':leave',
      //   useAnimation(fadeOut, { params: { timing: 0.2, delay: 0 } })
      // ),
    ]),
    trigger('zoomOut', [
      transition(
        ':enter',
        useAnimation(zoomIn, { params: { timing: 0.5, delay: 0 } })
      ),
      transition(
        ':leave',
        useAnimation(zoomOut, { params: { timing: 0.3, delay: 0 } })
      ),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  collapsed = false;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    items: 1,
    dots: false,
  };
  constructor() {}

  showFirstDiv = true;
  showSecondDiv = false;
  ngOnInit(): void {
    setInterval(() => {
      this.playNextVideo();
    }, 2500);

    setInterval(() => {
      this.carouselImages();
    }, 1500);

    setInterval(() => {
      // setInterval(() => {
      //   this.carouselImages();
      // }, 1500);
      this.showFirstDiv = !this.showFirstDiv;
      this.showSecondDiv = !this.showSecondDiv;
    }, 5000);
  }

  videos = [
    'assets/images/video1.mp4',
    'assets/images/video2.mp4',
    'assets/images/video3.mp4',
  ];
  currentVideoIndex = 0;
  playNextVideo() {
    this.currentVideoIndex++;
    if (this.currentVideoIndex >= this.videos.length) {
      this.currentVideoIndex = 0;
    }
    console.log(this.currentVideoIndex);
  }
  images = [
    { src: 'assets/images/img1.jpg', alt: 'Image 1' },
    { src: 'assets/images/img2.jpg', alt: 'Image 2' },
    { src: 'assets/images/img3.jpg', alt: 'Image 3' },
    { src: 'assets/images/img4.jpg', alt: 'Image 4' },
    { src: 'assets/images/img5.jpg', alt: 'Image 5' },
    { src: 'assets/images/img6.png', alt: 'Image 6' },
  ];
  currentImageIndex = 0;
  carouselImages() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
  }

  socailButton = [
    {
      id: 1,
      buttonName: 'Featured',
    },
    {
      id: 2,
      buttonName: 'Fashion & Jewelry',
    },
    {
      id: 3,
      buttonName: 'Real Estate',
    },
    {
      id: 4,
      buttonName: 'Beauty & Salons',
    },
    {
      id: 5,
      buttonName: 'Health & Wellness',
    },
    {
      id: 6,
      buttonName: 'Marketing Agencies',
    },
    {
      id: 7,
      buttonName: 'Home Service',
    },
    {
      id: 8,
      buttonName: 'Automotive',
    },
  ];
  cardImages = [
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    { src: 'assets/images/card1.png', alt: 'Image 1' },
    { src: 'assets/images/card2.png', alt: 'Image 2' },
    { src: 'assets/images/card3.png', alt: 'Image 3' },
    // add more images as needed
  ];
  owlOption: any = {
    loop: true,
    dots: false,
    navSpeed: 500,
    navText: [
      '<i class="bx bx-chevron-left"></i>',
      '<i class="bx bx-chevron-right"></i>',
    ],
    nav: true,
    items: 12,
  };
  carouselImageShow: any;
  sliderImage(data: any) {
    console.log(data);
    this.carouselImageShow = data;
    this.carouselModa = true;
  }
  carouselModa = false;
  carouselSliderModal() {
    this.carouselModa = false;
  }

  hello = false;
  showMoreCard() {
    this.hello = true;
  }

  simpleImage = [
    {
      url: 'assets/images/simple1.png',
      tittle: 'Choose Your Plan',
      detail:
        'Select the package that fits your needs. Include any add-ons you like.',
    },
    {
      url: 'assets/images/simple2.png',
      tittle: 'Answer Questionnaire',
      detail: 'Complete questionnaire about your brand and target audience.',
    },
    {
      url: 'assets/images/simple3.png',
      tittle: 'Post Delivered',
      detail: 'Complete questionnaire about your brand and target audience.',
    },
  ];
}
