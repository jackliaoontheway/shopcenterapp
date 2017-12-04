import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductlabelComponent } from './productlabel/productlabel.component';
import { ProductstockComponent } from './productstock/productstock.component';
import { MatComponentsModule } from '../../shared/modules/mat-components/mat-components.module';
import { AddProductComponent } from './productinfo/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        ProductsRoutingModule,
        PageHeaderModule,
        MatComponentsModule,
        HttpClientModule
    ],
    declarations: [ProductinfoComponent, ProductlabelComponent, ProductstockComponent, AddProductComponent]
})
export class ProductsModule {}
