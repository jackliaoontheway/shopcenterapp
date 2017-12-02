import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderinfoComponent } from './orderinfo/orderinfo.component';

const routes: Routes = [
    { path: '', redirectTo: 'orderinfo' },
    { path: 'orderinfo', component: OrderinfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
