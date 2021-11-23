import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ICategory } from 'src/app/ViewModel/icategory';
import { IProduct } from 'src/app/ViewModel/iproduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private httpClient:HttpClient) { }



  getAllProduct():Observable<IProduct[]>{

     return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`)
  }
  getProductByCatId(catId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?CateogryID=${catId}`)
  }
  getAllCategory():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/Categorys`)

  }

  getProductById(id:string):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.APIURL}/products/${id}`)
  }


}

