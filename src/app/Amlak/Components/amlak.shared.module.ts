import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { FilterComponent } from './shared-components/filter/filter.component';
import { BestPackagesComponent } from './shared-components/best-packages/best-packages.component';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations : [
    FilterComponent,
    BestPackagesComponent
  ],
  imports :[
    SharedModule,
    MatSelectModule
  ],
  exports : [
    FilterComponent,
    BestPackagesComponent
  ]
})
export class AmlakSharedModule { }


