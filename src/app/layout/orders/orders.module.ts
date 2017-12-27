import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [CommonModule, HttpClientModule , OrdersRoutingModule, PageHeaderModule],
    providers: [
        OrderService
    ],
    declarations: [OrderinfoComponent]
})
export class OrdersModule {}
