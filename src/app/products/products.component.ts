import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[]
  constructor(private productService:ProductService,private cartService:CartService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(productsData=>{
      this.products=productsData
    })
    
  }
   addToCart(product: Product) {
    this.cartService.addToCart(product);
  }


}
