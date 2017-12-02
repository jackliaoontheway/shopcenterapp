import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductlabelComponent } from './productlabel/productlabel.component';
import { ProductstockComponent } from './productstock/productstock.component';

const routes: Routes = [
    { path: '', redirectTo: 'productinfo' },
    { path: 'productinfo', component: ProductinfoComponent },
    { path: 'productstock', component: ProductstockComponent },
    { path: 'productlabel', component: ProductlabelComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
