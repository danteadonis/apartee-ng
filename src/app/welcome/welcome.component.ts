import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  welcomeLogo: string= './assets/images/apartee logo icon yellow.png';
  title: string= 'Apartee';
  bgImg: string= './assets/images/couple-moving-with-boxes2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
