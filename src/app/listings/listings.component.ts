import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  logoImg: string= './assets/images/apartee logo icon white .png';
  logoName: string= 'Apartee';

  houses: any[]= [
    {
      apartmentImg: './assets/images/couple-moving-with-boxes2.jpg',
      imgDesc: 'Your dream apartment',
      apartmentDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque?',
      premium: false
    },
    {
      apartmentImg: './assets/images/couple-moving-with-boxes2.jpg',
      imgDesc: 'Your dream apartment',
      apartmentDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque?',
      premium: true
    },
    {
      apartmentImg: './assets/images/couple-moving-with-boxes2.jpg',
      imgDesc: 'Your dream apartment',
      apartmentDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque?',
      premium: true
    },
    {
      apartmentImg: './assets/images/couple-moving-with-boxes2.jpg',
      imgDesc: 'Your dream apartment',
      apartmentDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque?',
      premium: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
