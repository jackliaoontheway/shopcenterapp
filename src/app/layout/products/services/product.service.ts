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

  getProductStock(procutCriteria: Product) {
    return this.http.post(this.productBaseUrl + '/listproductstockbycriteria', procutCriteria);
  }

  addProduct(product: Product) {
      return this.http.post(this.productBaseUrl + '/add', product);
  }

  readRFID(product: Product) {
    return this.http.post(this.productBaseUrl + '/readrfid', product);
  }

  downloadlabels(labelid: string) {
    window.open(this.productBaseUrl + '/downloadlabels?downloadId=' + labelid);
    /*this.http.get(this.productBaseUrl + '/downloadlabels?downloadId=' + labelid,
     {responseType : 'blob'}).subscribe( resp => {
      const newWindow = window.open('', '_blank');
      const newLocal = resp.msDetachStream.toString();
      newWindow.document.write(newLocal);
      newWindow.document.close();
    });*/
  }
}
