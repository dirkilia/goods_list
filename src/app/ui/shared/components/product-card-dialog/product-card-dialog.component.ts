import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YaEvent } from 'angular8-yandex-maps';
import { Coordinates } from 'src/app/domain/coordinates';
import { centerMoscow, radiusMoscow } from 'src/app/utils/constants';
import { randomCirclePoint } from 'src/app/utils/randomLocation';
import { Product } from '../../../../domain/product';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';


@Component({
  selector: 'app-product-card-dialog',
  templateUrl: './product-card-dialog.component.html',
  styleUrls: ['./product-card-dialog.component.scss'],
})
export class ProductCardDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public dialog: MatDialog
  ) {
    
  }
  
  public centerMoscow: Coordinates = centerMoscow;
  public radiusMoscow: number = radiusMoscow
  public mapPointsArray: Array<Coordinates> = this.generatePlacemarkCoordinates(centerMoscow, radiusMoscow)

  private generatePlacemarkCoordinates(centerMoscow: Coordinates, radiusMoscow: number) {
    let number_of_placemarks: number = Math.ceil(Math.random() * 10)
    let placemarksArray = []
    for (let index = 0; index < number_of_placemarks; index++) {
      placemarksArray.push(randomCirclePoint(centerMoscow, radiusMoscow))
    }
    return placemarksArray
  }
  public onPointClick(e: YaEvent):void {
    this.dialog.open(FormDialogComponent, {
      data: {
        id: '1',
        title: '1',
        price: 100,
        rating: {
            rate: 100,
            count: 100
        },
        image: '1',
        description: '1'
      }
    })
  }
  ngOnInit(): void {
    
  }

}

