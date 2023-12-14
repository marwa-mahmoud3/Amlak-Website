import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersAssociationRoutingModule } from './owners-association-routing.module';
import { OwnersAssociationComponent } from './owners-association.component';
import { SharedModule } from '../../shared.module';
import { HeroOneOAComponent } from './components/hero-one-oa/hero-one-oa.component';
import { HeroTwoOAComponent } from './components/hero-two-oa/hero-two-oa.component';
import { AboutOAComponent } from './components/about-oa/about-oa.component';
import { TasksOAComponent } from './components/tasks-oa/tasks-oa.component';
import { VoteOAComponent } from './components/vote-oa/vote-oa.component';
import { ChatOAComponent } from './components/chat-oa/chat-oa.component';
import { NewsAndBlogsOAComponent } from './components/news-and-blogs-oa/news-and-blogs-oa.component';
import { RentOAComponent } from './components/rent-oa/rent-oa.component';
import { AmlakSharedModule } from '../amlak.shared.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    OwnersAssociationComponent,
    HeroOneOAComponent,
    HeroTwoOAComponent,
    AboutOAComponent,
    TasksOAComponent,
    VoteOAComponent,
    ChatOAComponent,
    NewsAndBlogsOAComponent,
    RentOAComponent
  ],
  imports: [
    CommonModule,
    OwnersAssociationRoutingModule,
    SharedModule,
    AmlakSharedModule,
    MatProgressBarModule
  ],
  exports:[
    HeroOneOAComponent,
    HeroTwoOAComponent,
    AboutOAComponent,
    TasksOAComponent,
    VoteOAComponent,
    ChatOAComponent,
    RentOAComponent
  ]
})
export class OwnersAssociationModule { }
