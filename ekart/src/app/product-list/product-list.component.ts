import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
    name: 'Iphone X',
    price : 789,
    color:'black',
    discount:8.5,
    inStoke : 0,
    pImage : '../../assets/image/iphon.png'
  }

  getDiscountPrice(){
   return this.product.price-(this.product.price *this.product.discount/100)
  }
}
