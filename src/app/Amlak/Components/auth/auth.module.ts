import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from '../../shared.module';
import { NavComponent } from './components/nav/nav.component';

import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { CodeInputModule } from 'angular-code-input';
import { CalendarModule } from 'primeng/calendar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CodeInputModule.forRoot({
      codeLength: 4,
      isCharsCode: true,
      code: '----'
    }),
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'ar-EG'
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS
    }
  ],
})
export class AuthModule { }
