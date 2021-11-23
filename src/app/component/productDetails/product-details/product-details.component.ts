import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/Service/CardService/card.service';
import { ProductHttpService } from 'src/app/Service/Product/product-http.service';
import { IProduct } from 'src/app/ViewModel/iproduct';
import { IshoppingCartItem } from 'src/app/ViewModel/ishopping-cart-items';
import { CartState } from 'src/app/ViewModel/shoping-state';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  item:any;


  constructor(private productService:ProductHttpService,
              private activateRoute:ActivatedRoute,
              private cartService:CardService) { }


  ngOnInit(): void {
    let id=this.activateRoute.snapshot.paramMap.get('id')
    if(id){
      this.productService.getProductById(id).subscribe( data=> this.item =data)
    }

  }

  addToCart( ) {

    let CardItem: IshoppingCartItem =
    {
      ProductID: this.item.id,
      ProductName: this.item.Name,
      Unitprice: this.item.Price,
      Selectedquantity: 1,
      CartState: CartState.addToCart

    }
    this.cartService.addToshppingCart(CardItem);

  }

  getItemsInCard(prodcutId:number){

    let product= this.cartService.getItemfromCartById(prodcutId)
    if(product){
      return product.Selectedquantity;
    }
    return 0;
  }

}
