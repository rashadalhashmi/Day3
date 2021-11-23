import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/ViewModel/icategory';
import { IshoppingCartItems } from 'src/app/ViewModel/ishopping-cart-items';
import { CartState } from 'src/app/ViewModel/shoping-state';

@Component({
  selector: 'app-parent-card',
  templateUrl: './parent-card.component.html',
  styleUrls: ['./parent-card.component.scss']
})
export class ParentCardComponent implements OnInit {


  public shoppingCartItems:IshoppingCartItems[]=[]
  public CategoryList:ICategory[];
  public categoryID :number=0

  constructor() { 




    this.CategoryList=[
      {
        ID:1,
        Name:"phones",

      },
      {
        ID:2,
        Name:"TV",

      },   
    ]
  }


  ngOnInit(): void {
  }


  shoppingCartItemsChanges(shopingCartItem:IshoppingCartItems) {

       let productInCart= this.shoppingCartItems.find(product=>product.ProductID==shopingCartItem.ProductID) ;
           if(shopingCartItem.CartState==CartState.addToCart)
          {
                       if(productInCart !=undefined)  
                           productInCart.Selectedquantity+=shopingCartItem.Selectedquantity;
                       else             
                         this.shoppingCartItems.push(shopingCartItem);
           }

           if(shopingCartItem.CartState==CartState.removeFromCart)
           {
            if(productInCart !=undefined)  
               productInCart.Selectedquantity-=shopingCartItem.Selectedquantity;
               if(productInCart?.Selectedquantity ==0){
                 this.shoppingCartItems =  this.shoppingCartItems.filter(item=>item.ProductID!=productInCart?.ProductID);
               }

           }

              
        }

}
