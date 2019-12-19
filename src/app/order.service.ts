import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order } from './order';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderApiUrl = '/api/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderApiUrl)
      .pipe(
        catchError(this.handleError<Order[]>('getOrders', []))
      );
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderApiUrl, order, httpOptions)
      .pipe(
        catchError(this.handleError<Order>('createOrder'))
      );
  }

  private handleError<T>(operation = '', result?: T) {
    return (err: any): Observable<T> => {
      console.error(err);
      return of(result as T);
    };
  }
}
