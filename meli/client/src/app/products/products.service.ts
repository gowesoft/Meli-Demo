import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    url = 'http://localhost:3000/api/items';

    constructor(private http: HttpClient) { }

    getProducts(searchTerm: string): Observable<any> {
        return this.http.get(`${this.url}?q=${searchTerm}`);
    }

    getProduct(id: string): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }
}
