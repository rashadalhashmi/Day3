import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailsComponent } from './component/productDetails/product-details/product-details.component';

const routes: Routes = [
  { path: "", redirectTo: '/product', pathMatch: 'full' },
  { path: "product", component: ProductComponent },
  { path: "cart", component: CartComponent },
  {path:'productdetails/:id',component:ProductDetailsComponent},
  {
    path: 'user',
    loadChildren: () => import('src/app/lazyloading/user/user.module')
      .then(m => m.UserModule)
  },

  { path: '**', redirectTo: '/product' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
