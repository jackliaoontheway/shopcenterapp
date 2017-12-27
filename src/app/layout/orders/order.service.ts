import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './model/Order';

@Injectable()
export class OrderService {

  private orderBaseUrl = 'http://localhost:9999/shopcenterms/order';

  constructor(private http: HttpClient) {

  }

  listOrder(orderCriteria: Order) {
    return this.http.post(this.orderBaseUrl + '/listbycriteria', orderCriteria);
  }

}
