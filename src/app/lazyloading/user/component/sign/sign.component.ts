import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {FormBuilder, Validators,Validator,ValidatorFn, AbstractControl } from '@angular/forms';
import { UserHttpService } from 'src/app/Service/UserService/user-http.service';
import { Router } from '@angular/router';


function passwordMatch(c:AbstractControl):{[key:string]:boolean}|null{
  const passwordControl=c.get('password');
  const confirmPassword=c.get('confirmPassword');

  if(passwordControl?.pristine||confirmPassword?.pristine){
    return null ;
  }

  if(passwordControl?.value==confirmPassword?.value){
    return null ;
  }


  return {'match':true};
}


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  userForm:any;
  user=new User();
  constructor(
         private formBuilder:FormBuilder,
         private userHttp:UserHttpService,
         private route :Router) {}

  ngOnInit(): void {

  this.userForm= this.formBuilder.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.maxLength(50)]],
    email:['',[Validators.required,Validators.email]],
    passwordGroup:this.formBuilder.group({
    password:['',[Validators.required,Validators.minLength(7)]],
    confirmPassword:['',[Validators.required]]
    },{validator: passwordMatch}),
    sendCatalog:true,

   })

  }

  save(): void {

    this.user.id=Math.floor(Math.random()*1000)+"";
    this.user.firstName=this.userForm.get('firstName').value
    this.user.lastName=this.userForm.get('lastName').value;
    this.user.password=this.userForm.get('passwordGroup.password').value;
    this.user.username=this.userForm.get('email').value;
    this.user.Token="slfjk-sdfkjdkl55f-d45df4-dfllk"

    this.userHttp.createUser(this.user).subscribe(res=>{
      this.route.navigate(['user/login'])
        console.log(res);

    });
  }

}
