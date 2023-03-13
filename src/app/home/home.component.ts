import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 20,
    autoplay:true,
    autoplaySpeed:2000,
    autoplayHoverPause:true,     
      navText: ['', ''],
    responsive: {
      0: {
        items: 0
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      980: {
        items: 3
      }
    },
    nav: true
  }
  
}

