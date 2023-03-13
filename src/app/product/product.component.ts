import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  url: string = "../assets/images/img1.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }

}
