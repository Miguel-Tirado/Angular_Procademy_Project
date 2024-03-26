import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    // name: string = 'iPhone 13';
    // price: number = 999;
    // color: string = 'Red';
    
    // we declared a object name product 
    // with the name, price, and color as properties 

    //name: string = 'John Doe';
    addToCart:number = 0;

    product = {
      name: 'iPhone X',
      price: 789,
      color: 'Black',
      discount: 8.5,
      inStock: 3,
      pImage: '/assets/images/iphone3.png'
    }

    getDiscountedPrice() {
      return this.product.price - (this.product.price * this.product.discount / 100)
    }

    onNameChange(event: any) {
      //this.name = 'mark';
      //this.name = event.target.value;
      //console.log(event.target.value);
    }

    decrementCartValue() {
      if (this.addToCart > 0) {
        this.addToCart--;
      }
      
    }

    incrementCartValue() {
      if (this.addToCart < this.product.inStock) {
        this.addToCart++;
      }
    }
}
