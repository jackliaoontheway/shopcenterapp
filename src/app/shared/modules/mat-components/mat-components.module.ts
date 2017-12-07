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
  MatCardModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule
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
    MatCardModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MatComponentsModule { }
