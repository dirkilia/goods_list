import { AfterViewInit, Component } from '@angular/core';
import { Product } from './domain/product';
import { ProductsService } from './ui/shared/api/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  public page: number = 1
  public products: Product[] = [];
  public throttle: number = 300;
  public scrollDistance: number = 0.5;
  public isLoading: boolean = false

  constructor(
    private productsService: ProductsService,
  ) {}
  

  public ngAfterViewInit(): void {

    window.history.scrollRestoration = 'manual'

    this.productsService.readAll(this.page).then((products: any) => {
      this.products = products;
    });
    
    this.page += 1
  }

  public onScrollDown(): void {
    this.productsService.readAll(this.page).then((products: any) => {
      this.isLoading = true
      setTimeout(() => {
        this.products = [...this.products, ...products];
        this.isLoading = false
      }, 2000);
      if(products.length === 0) {
        this.isLoading = false
      }
    })
    
    
    this.page += 1 
  }
}
