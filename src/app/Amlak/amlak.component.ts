import { Component } from '@angular/core';

@Component({
  selector: 'app-amlak',
  templateUrl: './amlak.component.html',
  styleUrls: ['./amlak.component.css']
})
export class AmlakComponent {
  
  resetPosition(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
