import { HomeComponent } from './home/home.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { OffersComponent } from './offers/offers.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NgModule } from '@angular/core';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'food', component: FoodBeverageComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: '', component: HomeComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
