import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:Product[]=[];
  private cartCountSubject= new BehaviorSubject<number>(0);
  cartCount$=this.cartCountSubject.asObservable();

  constructor() { }
  addToCart(product:Product){
    this.cartItems.push(product)
    this.cartCountSubject.next(this.cartItems.length)
  }
   getCartItems(): Product[] {
    return this.cartItems;
  }
  
}
