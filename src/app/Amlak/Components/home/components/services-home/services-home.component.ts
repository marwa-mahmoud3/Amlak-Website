import { Component, OnInit } from '@angular/core';
interface Service {
  id?: string;
  title?: string;
  description?: string;
  photo?: string
}
@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent {
  services: Service[] = [];

  constructor() { }


  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.services = [
      {
        id: '1',
        title: 'Owners Association',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog1.png'
      },
      {
        id: '2',
        title: 'Real Estate Rental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog2.png'
      },
      {
        id: '3',
        title: 'Client Follow-Up',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog3.png'
      },
      {
        id: '4',
        title: 'Buying Real Estate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog4.png'
      },
      {
        id: '5',
        title: 'Owners Association',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog1.png'
      },
      {
        id: '6',
        title: 'Real Estate Rental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog2.png'
      },
      {
        id: '7',
        title: 'Client Follow-Up',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog3.png'
      },
      {
        id: '8',
        title: 'Buying Real Estate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        photo: '../../../../../../assets/images/Amlak-Images/services-images/blog4.png'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 3.2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2.2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1.3,
        numScroll: 1
      }
    ];
  }

}
