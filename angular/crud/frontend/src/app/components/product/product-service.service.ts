import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(message: string, isError : boolean = false) : void{
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition : 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e : any): Observable<any>{
    this.showMessage("Ocorreu um erro.", true);
    return EMPTY;
  }

  read() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id : string) : Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url);
  }

  update(produto : Product) : Observable<Product>{
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.put<Product>(url, produto);
  }

  delete( id : string) : Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url);
  }
}
