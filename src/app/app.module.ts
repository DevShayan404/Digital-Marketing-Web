import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';
import { HomeComponent } from './Home/home/home.component';
import {ButtonModule} from 'primeng/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {DialogModule} from 'primeng/dialog';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {PanelModule} from 'primeng/panel';
import { FooterComponent } from './Footer/footer/footer.component';
import { PricingComponent } from './Pricing/pricing/pricing.component';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PricingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    AvatarModule,
    AvatarGroupModule,
    PanelModule,
    CardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
