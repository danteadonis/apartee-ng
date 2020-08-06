import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router){}

  title = 'apartee-ng';
  hider: boolean= false;

  ngOnInit(): void{
    this.timer();
  }

  timer(): void{
    setTimeout(() => {
      this.hider=!this.hider;
      this.router.navigate(['welcome']);
    }, 3000);
  }
}
