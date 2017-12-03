import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductlabelComponent } from './productlabel/productlabel.component';
import { ProductstockComponent } from './productstock/productstock.component';
import { MatComponentsModule } from '../../shared/modules/mat-components/mat-components.module';



@NgModule({
    imports: [CommonModule, NgbModule.forRoot(), ProductsRoutingModule, PageHeaderModule, MatComponentsModule
    ],
    declarations: [ProductinfoComponent, ProductlabelComponent, ProductstockComponent]
})
export class ProductsModule {}
