import {
  on, createFeatureSelector,
  createSelector,
  createReducer,
  Action
} from '@ngrx/store';
import {
  ProductLoadFailure,
  ProductLoadSuccess, FilterProduct, AddToCart, ProductLoad
} from './product.actions';
import { IState } from '../../state';
import { IProduct } from '../IProduct';


export interface ProductState extends IState {
  products: IProduct[];
  priceFilter: {
    min: number;
    max: number
  };
  error: string;
  cart: IProduct[];
}

const initialeState: ProductState = {
  products: [],
  priceFilter: {
    min: 0,
    max: 0
  },
  error: '',
  cart: []
};

const getProductFeatureSelector = createFeatureSelector<ProductState>('product');

export const getProductlist = createSelector(
  getProductFeatureSelector,
  state => {
    if (state.priceFilter.min > 0 && state.priceFilter.max > 0) {
      return state.products.filter(product => product.price >= state.priceFilter.min
        && product.price <= state.priceFilter.max)
    } else {
      return state.products;
    }
  }
);

export const getFilteredProductList = createSelector(
  getProductFeatureSelector,
  state => state.products.filter(product => product.price >= state.priceFilter.min
    && product.price <= state.priceFilter.max)
);

export const getFilters = createSelector(
  getProductFeatureSelector,
  state => state.priceFilter
);

export const getCart = createSelector(
  getProductFeatureSelector,
  state => state.cart
);

export const productReducer = createReducer(
  initialeState,
  on(ProductLoadSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: ''
  })),
  on(ProductLoadFailure, (state, { error }) => ({
    ...state,
    products: [],
    error: error
  })),
  on(FilterProduct, (state, { min, max }) => ({
    ...state,
    priceFilter: { min: min, max: max }
  })),
  on(AddToCart, (state, prop) => ({
    ...state,
    cart: [...state.cart, prop.product]
  }))
);


export function productsReducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
