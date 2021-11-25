import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { IProduct } from 'src/app/ViewModel/iproduct';
import { IshoppingCartItem } from 'src/app/ViewModel/ishopping-cart-items';
import { CartState } from 'src/app/ViewModel/shoping-state';
import { CardService } from 'src/app/Service/CardService/card.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  IsPurshased: boolean = false;
  ProductList: Array<IProduct> = [];
  CartItems:Array<IshoppingCartItem>=[];
  constructor(private productService: ProductService,private cartService:CardService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe( products => this.ProductList = products);
    this.cartService.getShopingCart().subscribe(CartItems => {this.CartItems =CartItems})
  }

  getItemsInCard(prodcutId:number){

    let product= this.cartService.getItemfromCartById(prodcutId)
    if(product){
      return product.Selectedquantity;
    }
    return 0;
  }

    addToCart( item: IProduct) {

    let CardItem: IshoppingCartItem =
    {
      ProductID: item.id,
      ProductName: item.Name,
      Unitprice: item.Price,
      Selectedquantity: 1,
      CartState: CartState.addToCart

    }

    // item.Quantity--;
    this.cartService.addToshppingCart(CardItem);


  }

}

