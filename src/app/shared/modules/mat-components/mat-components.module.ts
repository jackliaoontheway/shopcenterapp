import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule,
  MatStepperModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule
  ]
})
export class MatComponentsModule { }
