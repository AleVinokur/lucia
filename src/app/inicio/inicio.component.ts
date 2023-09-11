import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  portadas = [
    {
      imagen: '../../assets/img/nail-makeup-beauty-facebook-banner-design-template-30a087d9706b012d69f59631ae0c77b0_screen.jpg',
      titulo: 'Portada 1'
    },
    {
      imagen: '../../assets/img/Tamp-Nails-Cover_edited-1.jpg',
      titulo: 'Portada 2'
    },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      ($('.portadas-container') as any).carousel();
    }, 0);
  }
}
