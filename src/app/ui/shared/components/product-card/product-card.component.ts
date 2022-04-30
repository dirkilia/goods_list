import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/domain/product';
import { ProductCardDialogComponent } from '../product-card-dialog/product-card-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: Product = {
    id: '',
    title: '',
    price: 0,
    rating: {
        rate: 0,
        count: 0
    },
    image: '',
    description: ''
  }
  constructor(public dialog: MatDialog) { }

  public openProductCard(): void {
    this.dialog.open(ProductCardDialogComponent, {
      data: {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        rating: {
            rate: this.product.rating.rate,
            count: this.product.rating.count
        },
        image: this.product.image,
        description: this.product.description
      },
      panelClass: 'dialog_wrapper'
    })
  }

  ngOnInit(): void {
  }

}
