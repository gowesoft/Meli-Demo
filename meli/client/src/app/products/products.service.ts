import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() { }

    getProducts(searchTerm: any) {
        return searchTerm;
    }
}
