import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDirectionService } from './Amlak/Services/change-dir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin : boolean = false


  constructor(private translateservice: TranslateService, private _title: Title,
    private changeDirectionService : ChangeDirectionService) {
    var obj = localStorage.getItem('selectedLang')
    let browserLang;
    if(obj){
      browserLang = obj
    }
    else{
      browserLang = 'ar'
    }
    this.setLanguage(browserLang)
    this.changeDirectionService.changeCssFile(browserLang);
  }

  setLanguage(lang:string) {
    this.translateservice.setDefaultLang(lang);
    this.translateservice.use(lang);
    localStorage.setItem('selectedLang',lang)
  }
}