import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AngularMaterialModule } from 'src/app/AngularMaterial/angular-material/angular-material.module';
import { SignComponent } from './component/sign/sign.component';
import { AdminComponent } from './component/admin/admin/admin.component';
import { UserAuthGuard } from 'src/app/user-auth.guard';

const route:Routes=[

  {path:'login',component:LoginComponent},
  {path:'sign',component:SignComponent},
  {path:'admin',component:AdminComponent,canActivate:[UserAuthGuard]}

]

@NgModule({
  declarations: [
    LoginComponent,
    SignComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ]
})
export class UserModule { }
