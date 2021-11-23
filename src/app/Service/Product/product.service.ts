import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../../ViewModel/iproduct';
import { BehaviorSubject, Observable } from "rxjs";
import { ProductHttpService } from './product-http.service';
import { ICategory } from 'src/app/ViewModel/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private _productsSubj: BehaviorSubject<Array<IProduct>>  ;
  public products$: Observable<IProduct[]> ;

  constructor(private httpProduct:ProductHttpService){

    this._productsSubj= new BehaviorSubject<Array<IProduct>>([]);
    this.products$=this._productsSubj.asObservable();
    this.httpProduct.getAllProduct().subscribe(product=>this._productsSubj.next(product));


  }



  /**
   * this function filter product by catagory id ;
   * @param categoryId number
   */
  public setProducts(categoryId: number = 0) {

    categoryId==0?
    this.httpProduct.getAllProduct().subscribe(product=>this._productsSubj.next(product))
        :this.httpProduct.getProductByCatId(categoryId).subscribe(product=>this._productsSubj.next(product));
  }








}
