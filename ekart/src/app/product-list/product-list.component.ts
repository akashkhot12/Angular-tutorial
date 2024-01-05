import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name:string = 'iphone'
  price:string = '$999'
  color:string='black'
  Discounted_price:string = '$900'
}
