import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Service/CardService/card.service';
import { UserService } from 'src/app/Service/UserService/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public cardItemsQuantaty:number=0 ;
  public isLogin:boolean =false;
  public Username:string="";

  constructor(private cartService:CardService ,private userService:UserService) {
   }

  ngOnInit(): void {

    this.cartService.getShopingCart().subscribe((cartItem)=>this.cardItemsQuantaty=cartItem.length)
    this.userService.loginStatus().subscribe(loginStatus=>this.isLogin=loginStatus)
    this.userService.username.subscribe(username=>this.Username=username);

  }

  logout(){
       this.userService.logout();
  }

}
