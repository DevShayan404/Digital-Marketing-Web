import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { PricingComponent } from './Pricing/pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'Get-Started',
    component: PricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
