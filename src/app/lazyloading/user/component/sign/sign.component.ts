import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {FormBuilder, Validators,Validator,ValidatorFn, AbstractControl } from '@angular/forms';
import { UserHttpService } from 'src/app/Service/UserService/user-http.service';


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
  constructor(private formBuilder:FormBuilder,private userHttp:UserHttpService) {


   }

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


    console.log(this.userForm.value);
 // console.log('Saved: ' + JSON.stringify(this.userForm));
  }

}
