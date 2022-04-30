import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardModule } from './ui/shared/components/product-card/product-card.module';
import { API_SERVER_PATH } from './ui/shared/tokens';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductCardModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {
      provide: API_SERVER_PATH,
      useValue: "https://fakestoreapi.com"
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
