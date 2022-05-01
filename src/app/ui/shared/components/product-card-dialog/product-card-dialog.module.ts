import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardDialogComponent } from './product-card-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogModule } from '../form-dialog/form-dialog.module';

const mapConfig: YaConfig = {
  apikey: '964d024b-4a1e-4ee6-8b0e-8040e5c1fba6',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    ProductCardDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormDialogModule
  ],
})
export class ProductCardDialogModule { }
