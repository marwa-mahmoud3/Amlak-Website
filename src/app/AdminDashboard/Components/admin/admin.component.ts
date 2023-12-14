import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  showHeader: boolean = false;
  showSidebar:boolean = false;
  showFooter:boolean = false;
  constructor(private Router: Router){ }

  ngOnInit(): void {
    this.Router.events.forEach((event) => {
      if (event instanceof NavigationStart){
        this.showHeader = event.url !== "/login";
        this.showSidebar = event.url !== "/login";
        this.showFooter = event.url !== "/login";
      }
    });
  }

  resetPosition(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
