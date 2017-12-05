import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  private productBaseUrl = 'http://localhost:8080/shopcenterms/product';

  constructor(private http: HttpClient) {

  }

  getProduct() {
    return this.http.get(this.productBaseUrl + '/list');
  }

  addProduct(product: Product) {
      return this.http.post(this.productBaseUrl + '/add', product);
  }

}
