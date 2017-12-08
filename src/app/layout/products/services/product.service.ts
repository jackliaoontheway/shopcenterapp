import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  private productBaseUrl = 'http://localhost:8080/shopcenterms/product';

  constructor(private http: HttpClient) {

  }

  getProduct(procutCriteria: Product) {
    return this.http.post(this.productBaseUrl + '/listbycriteria', procutCriteria);
  }

  addProduct(product: Product) {
      return this.http.post(this.productBaseUrl + '/add', product);
  }

  readRFID(product: Product) {
    return this.http.post(this.productBaseUrl + '/readrfid', product);
  }

}
