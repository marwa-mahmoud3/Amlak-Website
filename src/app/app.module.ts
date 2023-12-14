import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';
import { CustomPageTitleStrategy } from './Amlak/Services/CustomPageTitleStrategy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export function httpTranslateLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot( {
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })   
  ],
  providers:[ 
    { provide: TitleStrategy, useClass: CustomPageTitleStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
