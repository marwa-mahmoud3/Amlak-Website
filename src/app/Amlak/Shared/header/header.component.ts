import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDirectionService } from '../../Services/change-dir.service';
import { DateAdapter } from '@angular/material/core';
import { MomentDateAdapter, MomentDateModule } from '@angular/material-moment-adapter';
import { SharedVarService } from '../../Services/sharedVarService';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isHide: boolean = false;
  lang : any;
  pageName : string = "";

  changePage(value: string){
    this.pageName = value;
  }

  constructor(private translateservice: TranslateService,
    private changeDirectionService:ChangeDirectionService,
    private sharedVarService : SharedVarService
   ){}

  ngOnInit(): void {
    this.pageName = location.pathname.split('/')[1]
    var obj = localStorage.getItem('selectedLang')
    if(obj){
      this.lang = obj
    }
    else{
      this.lang = 'ar'
    }
    this.sharedVarService.setLanguage(this.lang)
  }

  translate(){
    if(this.lang == 'ar'){
      this.lang = 'en';
    }
    else if(this.lang == 'en'){
      this.lang = 'ar';
    }
    this.setLanguage(this.lang)
    this.changeDirectionService.changeCssFile(this.lang);
  }

  setLanguage(lang:string) {
    this.translateservice.setDefaultLang(lang);
    this.translateservice.use(lang);
    this.sharedVarService.setLanguage(lang)
    localStorage.setItem('selectedLang',lang)
  }

}
