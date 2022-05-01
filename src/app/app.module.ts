import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardModule } from './ui/shared/components/product-card/product-card.module';
import { API_SERVER_PATH } from './ui/shared/tokens';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: API_SERVER_PATH,
      useValue: "http://localhost:3000"
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
