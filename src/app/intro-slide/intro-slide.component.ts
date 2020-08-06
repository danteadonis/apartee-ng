import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-slide',
  templateUrl: './intro-slide.component.html',
  styleUrls: ['./intro-slide.component.scss']
})
export class IntroSlideComponent implements OnInit {

  carouselImg_1: string= './assets/images/couple-moving-with-boxes2.jpg';
  carouselImg_2: string= './assets/images/couple-moving-with-boxes2.jpg';
  carouselImg_3: string= './assets/images/couple-moving-with-boxes2.jpg';

  carouselText_1: string= 'Apartee is something something and something.';
  carouselText_2: string= 'Apartee makes renting something something and something.';
  carouselText_3: string= 'With Apartee you gain on something something and something.';

  constructor() { }

  ngOnInit(): void {
  }

}
