import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';
import { Product } from "./Product/product";
import { PRODUCTS } from "./Product/products";






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angularbootstrapproject';
  imageWidth: number = 150;
  imageMargin: number = 2;
  products: Product[];

  searchText = '';
  ngOnInit() {
    this.products = PRODUCTS;

  }











}

