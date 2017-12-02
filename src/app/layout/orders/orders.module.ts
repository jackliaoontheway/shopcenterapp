import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';


@NgModule({
    imports: [CommonModule, OrdersRoutingModule, PageHeaderModule],
    declarations: [OrderinfoComponent]
})
export class OrdersModule {}
