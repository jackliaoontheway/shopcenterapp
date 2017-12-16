import { Component, OnInit } from '@angular/core';
import { PageEvent, MatSnackBar } from '@angular/material';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {

  printProduct: Product;
  editProduct: Product;
  currentTab = 'productinfo';
  pageIndex = 0;
  totalCount = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  productList: Product[];

  procutCriteria = new Product();

  constructor(private productService: ProductService , private snackBar: MatSnackBar) {

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
    this.editProduct = new Product();
    this.listProduct();
  }

  edit(product) {
    this.currentTab = 'editproduct';
    this.editProduct = product;
  }

  print(product) {
    this.currentTab = 'printlabel';
    this.printProduct = product;
  }

  delete(product) {
    this.productService.deleteProduct(product).subscribe((response) => {
      this.listProduct();
      this.snackBar.open('成功', 'Done', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
  });
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
