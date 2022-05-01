import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDialogComponent } from './form-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormDialogComponent
  ]
})
export class FormDialogModule { }
