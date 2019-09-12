import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../IProduct';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: IProduct[];
  @Output() addToCart = new EventEmitter<IProduct>();
  constructor() { }

  ngOnInit() {
  }

  cart(product) {
    this.addToCart.emit(product);
  }

}
