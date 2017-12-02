import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesrankComponent } from './salesrank/salesrank.component';

const routes: Routes = [
    { path: '', redirectTo: 'salesrankreport' },
    { path: 'salesrankreport', component: SalesrankComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule {
}
