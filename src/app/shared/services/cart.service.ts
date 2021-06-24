import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  getChickenProducts(){
    return this.http.get('https://mocki.io/v1/b594c9ee-6492-4911-89b9-03958d786656')
  }
  getMuttonProducts(){
    return this.http.get('https://mocki.io/v1/fc89425a-97d8-41cb-a5ea-2c77ec6b12f5')
  }
}
