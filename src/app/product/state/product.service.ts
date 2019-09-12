import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';
import { productList } from './product.list';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return of(productList);
  }


}
