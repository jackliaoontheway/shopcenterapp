import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ProductStock } from '../model/productstock';

@Component({
  selector: 'app-productstock',
  templateUrl: './productstock.component.html',
  styleUrls: ['./productstock.component.scss']
})
export class ProductstockComponent implements OnInit {

  pageIndex = 0;
  totalCount = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  productList: ProductStock[];

  procutCriteria = new ProductStock();

  constructor(private productService: ProductService) {

  }

  onChange(param) {
    this.pageIndex = param.pageIndex;
    this.pageSize = param.pageSize;
    this.listProductStock();
  }

  search() {
    this.listProductStock();
  }

  ngOnInit() {
    this.listProductStock();
  }

  listProductStock() {
    this.procutCriteria.pageIndex = this.pageIndex;
    this.procutCriteria.pageSize = this.pageSize;
    this.productService.getProductStock(this.procutCriteria).subscribe((response) => {
      this.productList = JSON.parse(JSON.stringify(response)).data;
      this.totalCount = JSON.parse(JSON.stringify(response)).totalCount;
     });
  }

}
