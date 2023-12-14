import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutHomeComponent } from './components/about-home/about-home.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { UnitsHomeComponent } from './components/units-home/units-home.component';
import { WorkTeamHomeComponent } from './components/work-team-home/work-team-home.component';
import { ContactUsHomeComponent } from './components/contact-us-home/contact-us-home.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { SharedModule } from '../../shared.module';
import { CarouselModule } from 'primeng/carousel';
import { AmlakSharedModule } from '../amlak.shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutHomeComponent,
    ServicesHomeComponent,
    UnitsHomeComponent,
    WorkTeamHomeComponent,
    ContactUsHomeComponent,
    HeroHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AmlakSharedModule,
    CarouselModule
  ]
})
export class HomeModule { }
