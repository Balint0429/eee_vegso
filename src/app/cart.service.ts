import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  addToCart(productId: number): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/addkosar`, { product_id: productId });
  }

  updateCartItem(cartItemId: number, quantity: number): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/updatekosar`, { id: cartItemId, quantity: quantity });
  }

  removeCartItem(cartItemId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/deletekosar/${cartItemId}`);
  }

  submitOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/addrendeles`, orderData);
  }
}
