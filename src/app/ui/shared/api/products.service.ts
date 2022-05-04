import { Inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { API_SERVER_PATH } from "../tokens"
import { UserData } from 'src/app/domain/user_data';

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


  public readAll(page: number): Promise<Products> {
    return firstValueFrom(this.httpClient.get<Products>(`${ this.apiServerPath }/products?_page=${page}&_limit=50`))
  }

  public post(user: UserData): Promise<UserData> {
    console.log(JSON.stringify(user), `${ this.apiServerPath }/users`)
    return firstValueFrom(this.httpClient.post<UserData>(`${ this.apiServerPath }/users`, JSON.stringify(user), {
      'headers': {
        'Content-Type': 'application/json'
      }
    }))
  }
}
