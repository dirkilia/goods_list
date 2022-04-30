import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YaEvent } from 'angular8-yandex-maps';
import { Product } from '../../../../domain/product';

@Component({
  selector: 'app-product-card-dialog',
  templateUrl: './product-card-dialog.component.html',
  styleUrls: ['./product-card-dialog.component.scss'],
})
export class ProductCardDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {}

  public onPointClick(e: YaEvent):void {
    const { target, event } = e;
    console.log(target.geometry._coordinates, event)
  }

  ngOnInit(): void {
    
  }
}
