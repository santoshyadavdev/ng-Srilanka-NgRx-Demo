import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './state/product.reducer';
import { ProductEffect } from './state/product.effects';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { ProductCartComponent } from './product-cart/product-cart.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductCartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forFeature('product', productsReducer),
    EffectsModule.forFeature([ProductEffect])
  ]
})
export class ProductModule { }
