import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmlakRoutingModule } from './amlak-routing.module';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { AmlakComponent } from './amlak.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ServicesComponent } from './Components/services/services.component';
import { UnitsComponent } from './Components/units/units.component';
import { SharedModule } from './shared.module';
import { SearchComponent } from './Components/search/search.component';
import { UnitDetailsComponent } from './Components/unit-details/unit-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    AmlakComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    ServicesComponent,
    UnitsComponent,    
    SearchComponent,
    UnitDetailsComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    AmlakRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],

})
export class AmlakModule { }


