
import { createAction, props } from '@ngrx/store';
import { IProduct } from '../IProduct';


export const ProductLoad = createAction('[Product] Get Products');
export const ProductLoadSuccess = createAction('[Product] Get Product Success',
  props<{ products: IProduct[] }>());
export const ProductLoadFailure = createAction('[Product] Get Product Failure',
  props<{ error: string }>());
export const FilterProduct = createAction('[Product] Get Filtered Product',
  props<{ min: number, max: number }>());
export const AddToCart = createAction('[Product] Add Product To Cart',
  props<{ product: IProduct }>());
