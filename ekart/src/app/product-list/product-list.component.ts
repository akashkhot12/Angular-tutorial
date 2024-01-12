import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  addToCart:Number= 0
  product = {
    name: 'Iphone X',
    price : 789,
    color:'black',
    discount:8.5,
    inStoke : 10,
    pImage : '../../assets/image/iphon.png'
  }

  getDiscountPrice(){
   return this.product.price-(this.product.price *this.product.discount/100)
  }
}
