import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/lazyloading/user/component/sign/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient:HttpClient) { }


  createUser(user:User){
    headers:new HttpHeaders({
      'content-type': 'application/JSON',
    })

    return this.httpClient.post(`${environment.APIURL}/Users`,user);
  }
}
