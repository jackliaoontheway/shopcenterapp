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

  pageIndex = 0;
  totalCount = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  productList: Product[];

  procutCriteria = new Product();

  constructor(private productService: ProductService) {

  }

  onChange(param) {
    this.pageIndex = param.pageIndex;
    this.pageSize = param.pageSize;
    this.listProduct();
  }

  search() {
    this.listProduct();
  }

  ngOnInit() {
    this.listProduct();
  }

  listProduct() {
    this.procutCriteria.pageIndex = this.pageIndex;
    this.procutCriteria.pageSize = this.pageSize;
    this.productService.getProduct(this.procutCriteria).subscribe((response) => {
      this.productList = JSON.parse(JSON.stringify(response)).data;
      this.totalCount = JSON.parse(JSON.stringify(response)).totalCount;
     });
  }

}
