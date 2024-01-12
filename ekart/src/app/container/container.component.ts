import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class containerComponent {
  addToCart: number = 0
  product = {
    name: 'Iphone X',
    price: 789,
    color: 'black',
    discount: 8.5,
    inStoke: 10,
    pImage: '../../assets/image/iphon.png'
  }

  getDiscountPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--
    }

  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStoke) {
      this.addToCart++
    }
  }
}
