import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { IntroSlideComponent } from './intro-slide/intro-slide.component';
import { ListingsComponent } from './listings/listings.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'welcome/intro-slide',
    component: IntroSlideComponent
  },
  {
    path: 'welcome/intro-slide/apartment-listings',
    component: ListingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
