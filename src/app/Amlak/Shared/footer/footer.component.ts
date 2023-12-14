import { SharedVarService } from './../../Services/sharedVarService';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDirectionService } from '../../Services/change-dir.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  currentYear = (new Date).getFullYear();
  lang: any;

  constructor(private translateservice: TranslateService,
    private changeDirectionService : ChangeDirectionService,
    private sharedVarService : SharedVarService
  ){}

  ngOnInit(): void {
    var obj = localStorage.getItem('selectedLang')
    if(obj){
      this.lang = obj
    }
    else{
      this.lang = 'ar'
    }
    this.sharedVarService.setLanguage(this.lang)
  }
  
  translate(val:any){
    this.lang = val
    this.setLanguage(this.lang)
    this.changeDirectionService.changeCssFile(this.lang);
  }

  setLanguage(lang:string) {
    this.translateservice.setDefaultLang(lang);
    this.translateservice.use(lang);
    this.sharedVarService.setLanguage(lang)
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
