import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductState, getCart } from '../state/product.reducer';
import { Observable } from 'rxjs';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cart$: Observable<IProduct[]>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit() {
    // this.store.dispatch(GetCart());
    this.cart$ = this.store.pipe(select(getCart));
  }

}
