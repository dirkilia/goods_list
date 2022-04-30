import { AfterViewInit, Component } from '@angular/core';
import { Product } from './domain/product';
import { ProductsService } from './ui/shared/api/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private productsService: ProductsService,
  ) {}
  public products: Product[] = [];

  public ngAfterViewInit(): void {
    this.productsService.readAll().then((products: any) => {
      this.products = products;
      for (const product of products) {
        const { id, title, price, image, rating } = product;
      }
    });
  }

  
}
