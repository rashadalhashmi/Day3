import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Service/CardService/card.service';
import { ProductHttpService } from 'src/app/Service/Product/product-http.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { ICategory } from 'src/app/ViewModel/icategory';
import { IshoppingCartItem } from 'src/app/ViewModel/ishopping-cart-items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems:IshoppingCartItem[]=[];

  constructor(private cartService:CardService,private productService:ProductService) {

   }

   ngOnInit(): void {
    this.cartService.getShopingCart().subscribe((cartItems)=>this.cartItems=Array.from(cartItems));
  }

  removeFromCart(id:number):void{
    this.cartService.removeItemFromCart(id)

  }


}
