import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductlabelComponent } from './productlabel/productlabel.component';
import { ProductstockComponent } from './productstock/productstock.component';


@NgModule({
    imports: [CommonModule, ProductsRoutingModule, PageHeaderModule],
    declarations: [ProductinfoComponent, ProductlabelComponent, ProductstockComponent]
})
export class ProductsModule {}
