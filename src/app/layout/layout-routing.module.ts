import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'products' },
            { path: 'products', loadChildren: './products/products.module#ProductsModule' },
            { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
