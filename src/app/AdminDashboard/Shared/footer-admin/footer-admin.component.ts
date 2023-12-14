import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDirectionService } from 'src/app/Amlak/Services/change-dir.service';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.css']
})
export class FooterAdminComponent {
  currentYear = (new Date).getFullYear();
  lang: any;

  constructor(private translateservice: TranslateService,
    private changeDirectionService : ChangeDirectionService){}

  ngOnInit(): void {
    var obj = localStorage.getItem('selectedLang')
    if(obj){
      this.lang = obj
    }
    else{
      this.lang = 'ar'
    }
  }
  
  translate(val:any){
    this.lang = val
    this.setLanguage(this.lang)
    this.changeDirectionService.changeCssFile(this.lang);
  }

  setLanguage(lang:string) {
    this.translateservice.setDefaultLang(lang);
    this.translateservice.use(lang);
    localStorage.setItem('selectedLang',lang)
  }

  resetPosition(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
