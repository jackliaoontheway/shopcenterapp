import { Component, OnInit } from '@angular/core';
import { Order } from '../model/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orderinfo',
  templateUrl: './orderinfo.component.html',
  styleUrls: ['./orderinfo.component.scss']
})
export class OrderinfoComponent implements OnInit {
  
  pageIndex = 0;
  totalCount = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  orderList: Order[];

  orderCriteria = new Order();

  constructor(private orderService: OrderService) {

  }

  onChange(param) {
    this.pageIndex = param.pageIndex;
    this.pageSize = param.pageSize;
    this.listOrder();
  }

  search() {
    this.listOrder();
  }

  ngOnInit() {
    console.log('on init...');
    this.listOrder();
  }

  listOrder() {
    this.orderCriteria.pageIndex = this.pageIndex;
    this.orderCriteria.pageSize = this.pageSize;
    this.orderService.listOrder(this.orderCriteria).subscribe((response) => {
      this.orderList = JSON.parse(JSON.stringify(response)).data;
      this.totalCount = JSON.parse(JSON.stringify(response)).totalCount;
     });
  }


}
