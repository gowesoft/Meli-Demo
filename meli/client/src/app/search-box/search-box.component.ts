import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ProductsService } from '../products/products.service';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
    searchForm: FormGroup = new FormGroup({
        searchTerm: new FormControl('')
    });

    constructor(
        private fb: FormBuilder,
        private productService: ProductsService) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.productService.getProducts(this.searchForm.value.searchTerm).subscribe(data => {
            console.log(data);
        });
    }

}
