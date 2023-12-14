import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  pageName : string = "dashboard";

  changePage(value: string){
    this.pageName = value;
  }

  ngOnInit(){
    this.pageName = location.pathname.split('/')[2]
  }

}
