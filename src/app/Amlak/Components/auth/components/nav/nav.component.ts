import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  pageName : string = "login";

  changePage(value: string){
    this.pageName = value;
  }

  ngOnInit(){
    this.pageName = location.pathname.split('/')[1]
  }
}
