import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductLoad, FilterProduct, AddToCart } from './state/product.actions';
import { ProductState, getProductlist, getFilteredProductList, getFilters } from './state/product.reducer';
import { Observable } from 'rxjs';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  filterForm: FormGroup;
  products$: Observable<IProduct[]>;

  constructor(private store: Store<ProductState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.fb.group({
      minPrice: new FormControl('', Validators.required),
      maxPrice: new FormControl('', Validators.required)
    });
    this.store.dispatch(ProductLoad());
    this.products$ = this.store.pipe(select(getProductlist));
    this.store.pipe(select(getFilters)).subscribe(
      filters => this.filterForm.patchValue({
        minPrice: filters.min,
        maxPrice: filters.max
      })
    );
  }

  filterProduct() {
    this.store.dispatch(FilterProduct({
      min: this.filterForm.get('minPrice').value,
      max: this.filterForm.get('maxPrice').value
    }));
  }

  processCart(product: IProduct) {
    this.store.dispatch(AddToCart({ product: product }));
  }

}
