import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageslider',

    template: `
      <ngx-slick-carousel class="carousel"
        [config]="slideConfig"
        (afterChange)="onAfterChange($event)">
        <div ngxSlickItem *ngFor="let image of images">
          <img src="{{ image }}" alt="">
        </div>
      </ngx-slick-carousel>
    `,
    styles: [
      `
        .carousel {
          width: 100%;
        }
      `
    ]


})
export class ImagesliderComponent implements OnInit {
  images = [
    '../../assets/images/faby1.webp',
    '../../assets/images/faby1.webp',
    '../../assets/images/faby1.webp',
    '../../assets/images/faby1.webp'
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  onAfterChange(event: any) {
    console.log(event);
  }



  constructor() { }

  ngOnInit() {
  }

}
