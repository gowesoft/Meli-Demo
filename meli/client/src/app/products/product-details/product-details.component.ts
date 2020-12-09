import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../products.service';
import { Item } from '../products.model';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    id: string = '';
    item: Item | undefined;
    author = {};

    constructor(
        private _Activatedroute: ActivatedRoute,
        private productService: ProductsService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (this._Activatedroute.snapshot.paramMap.has("id")) {
            this.id = this._Activatedroute.snapshot.paramMap.get("id")!;
            this.productService.getProduct(this.id).subscribe(data => {
                this.author = data.results.author;
                this.item = data.results.item;
            });
        }
    }

}
