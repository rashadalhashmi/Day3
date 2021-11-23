import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/UserService/user.service';
import { Route, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usernotfound: boolean = false;
  constructor(private userService: UserService, private router: Router) {
   }

  ngOnInit(): void {}

  login(user: any): void {

    if (this.userService.login(user.username, user.password))
      this.router.navigate(['/product']);
    else
      this.usernotfound = true;
  }


}
