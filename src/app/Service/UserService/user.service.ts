import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  users=[
    {id:"1",username:'R@gmail.com',password:"123456789",token:"0600f938-7c7f-4bef-a569-3e15dcc43140",firstName:"rashad",lastName:"hussein"},
    {id:"2",username:'Karim@gmail.com',password:"111111111",token:"0600f938-7c7f-4bef-a569-3e15dcc43140",firstName:"hussein",lastName:"saad"},
    {id:"3",username:'Rady@gmail.com',password:"2321125454",token:"0600f938-7c7f-4bef-a569-3e15dcc43140",firstName:"Ahmed",lastName:"sami"}
  ]

  private _isLoggedSubject: BehaviorSubject<boolean>;
  private _usernam:BehaviorSubject<string>;
   get username(){
     return this._usernam.asObservable();
   }

  constructor() {

    this._isLoggedSubject = new BehaviorSubject<boolean>(false);
    this._usernam=new BehaviorSubject<string>("Username");



  }
  /**
   * this function using to login user to web site .
   * @param username string
   * @param password string
   * @returns boolean
   */
  login(username: string, password: string):boolean {


      let user =this.users.find(user=>user.username===username&&user.password===password)
      if(user){
        localStorage.setItem("Token", user.token);
        localStorage.setItem("Username", user.firstName);
        this._isLoggedSubject.next(true);
        this._usernam.next(user.firstName);
        return true ;
      }

      return false;
  }
  /**
   * this function use to logout user
   */
  logout(): void {
    localStorage.removeItem('Token');
    localStorage.removeItem("Username");
    this._isLoggedSubject.next(false);
    this._usernam.next('Username')
  }
  /**
   * this function use to find the staus of the user
   * @returns observable<boolean
   */
  loginStatus(): Observable<boolean> {

    if(localStorage.getItem('Token')){
      let username =localStorage.getItem('Username')??"username"
      this._isLoggedSubject.next(true) ;
      this._usernam.next(username)

    }

    return this._isLoggedSubject.asObservable();
  }

}
