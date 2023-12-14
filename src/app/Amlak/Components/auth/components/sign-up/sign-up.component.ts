import { SharedVarService } from './../../../../Services/sharedVarService';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  lang = ''
  user = {
    date: ""
  }

  constructor(
    private adapter: DateAdapter<Date>,
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
    this.adapter.setLocale(this.lang)
    this.sharedVarService.getLanguage().subscribe(val =>{
      if(val){
        this.adapter.setLocale(val)
      }
    })
  }

  fieldTextType: boolean = false;
  step: boolean = false;
  showHidePassword() {
    this.fieldTextType = !this.fieldTextType
  }

  showHideStep() {
    this.step = !this.step;
  }

  // this called every time when user changed the code
  onCodeChanged(code: string) {
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
  }
}
