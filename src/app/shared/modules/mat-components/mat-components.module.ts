import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSelectModule

} from '@angular/material';

@NgModule({
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class MatComponentsModule { }
