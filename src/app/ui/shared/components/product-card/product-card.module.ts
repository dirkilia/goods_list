import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ProductCardDialogModule } from '../product-card-dialog/product-card-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule, 
    MatDialogModule,
    ProductCardDialogModule,
    MatCardModule
  ],
  exports: [
    ProductCardComponent
  ],
})
export class ProductCardModule { }
