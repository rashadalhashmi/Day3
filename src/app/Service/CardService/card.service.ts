import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IshoppingCartItem } from 'src/app/ViewModel/ishopping-cart-items';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  shopingCartItems: IshoppingCartItem[] = []
  private cartSubject: BehaviorSubject<Array<IshoppingCartItem>>;

  constructor() {

    this.cartSubject = new BehaviorSubject<Array<IshoppingCartItem>>(this.shopingCartItems);

  }

  addToshppingCart(item: IshoppingCartItem) {
    let cartItem: IshoppingCartItem | undefined =
      this.shopingCartItems.find(Product => Product.ProductID == item.ProductID)

    cartItem ? cartItem.Selectedquantity++ : this.shopingCartItems.push(item);

    this.cartSubject.next(this.shopingCartItems);

  }


  getShopingCart(): Observable<IshoppingCartItem[]> {
    return this.cartSubject.asObservable();
  }


  getItemfromCartById(id: number): IshoppingCartItem | undefined {
    return this.shopingCartItems.find((item) => item.ProductID == id)
  }

  removeItemFromCart(id: number) {
    this.shopingCartItems = this.shopingCartItems
      .filter(item => item.ProductID != id);
    this.cartSubject.next(this.shopingCartItems);
  }

}
