import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'cart', component:  ProductCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
