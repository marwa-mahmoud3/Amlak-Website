import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    TranslateModule.forChild({
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }}
    ),
  ],
  exports :[
    TranslateModule,
  ],
  
})
export class SharedModule { }


