import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  pageEvent: PageEvent;

  productList: Product[];

  procutCriteria: Product;

  constructor(private productService: ProductService) {

  }

  onChange(param) {
    this.pageEvent = param;
    console.log(param);
  }

  search() {
    this.listProduct();
  }

  ngOnInit() {
    this.listProduct();
  }

  listProduct() {
    this.productService.getProduct().subscribe((response) => {
      this.productList = JSON.parse(JSON.stringify(response));
      this.length = this.productList.length;
     });
  }

}
