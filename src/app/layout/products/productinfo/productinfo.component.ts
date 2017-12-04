import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {

  }

  onChange(param) {
    this.pageEvent = param;
    console.log(param);
  }

  search() {
    console.log('search something');
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/shopcenterms/product/list')
    .subscribe((response) => {
      this.productList = JSON.parse(JSON.stringify(response));
     });
  }

}
