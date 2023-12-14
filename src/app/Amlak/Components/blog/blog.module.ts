import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NewsAndBlogsComponent } from './components/news-and-blogs/news-and-blogs.component';
import { OwnersAssociationModule } from '../owners-association/owners-association.module';
import { AmlakSharedModule } from '../amlak.shared.module';


@NgModule({
  declarations: [
    BlogComponent,
    NewsAndBlogsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    OwnersAssociationModule,
    AmlakSharedModule
  ]
})
export class BlogModule { }
