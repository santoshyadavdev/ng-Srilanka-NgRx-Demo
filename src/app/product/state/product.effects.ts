import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { IProduct } from '../IProduct';
import { of } from 'rxjs';
import { ProductService } from './product.service';
import { ProductLoad, ProductLoadSuccess, ProductLoadFailure } from './product.actions';

@Injectable()
export class ProductEffect {

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductLoad),
      mergeMap(() => this.productService.getProducts().pipe(
        map((productList: IProduct[]) => ProductLoadSuccess({ products: productList })),
        catchError((err) => of(ProductLoadFailure({ error: err })))
      )
      )
    )
  );
}
