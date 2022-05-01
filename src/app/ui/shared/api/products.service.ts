import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { API_SERVER_PATH } from "../tokens"

type Products = {
  success: boolean,
  datatype: string,
  numOfResults: number,
  lastPage: number,
  page: number,
  data: object[]
}

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(private httpClient: HttpClient,
    @Inject(API_SERVER_PATH) private apiServerPath: string) {
}

  // public read(id: number): Promise<Place> {
  //   return firstValueFrom(this.httpClient.get<Place>(`${ this.apiServerPath }/places/${ id }`))
  // }

  public readAll(page: number): Promise<Products> {
    return firstValueFrom(this.httpClient.get<Products>(`${ this.apiServerPath }/products?_page=${page}&_limit=50`))
  }

}
