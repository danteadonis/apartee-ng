import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  keyframes,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('logoSpin', [
      transition('* <=> *', [
        animate('2.5s', keyframes([
          style({margin: 'auto', display: 'block'}),
          style({transform: 'rotateX(180deg)'}),
          style({transform: 'rotate(180deg)'}),
          style({transform: 'rotateX(-180deg)'}),
          style({transform: 'rotate(0deg)'})
        ]))
      ])
    ])
  ]
})
export class IntroComponent implements OnInit {

  logoImg: string= "./assets/images/apartee logo icon yellow.png";
  triggerVar: boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

}
