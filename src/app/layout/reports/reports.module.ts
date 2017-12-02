import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';

import { ReportsRoutingModule } from './reports-routing.module';
import { SalesrankComponent } from './salesrank/salesrank.component';

@NgModule({
    imports: [CommonModule, ReportsRoutingModule, PageHeaderModule],
    declarations: [SalesrankComponent]
})
export class ReportsModule {}
