import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductFilterComponent } from './component/product-filter/product-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './AngularMaterial/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './component/productDetails/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
