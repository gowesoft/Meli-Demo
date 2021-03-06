import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../products.service';
import { Item } from '../products.model';

import { NumberFormatPipe } from '../../shared/number.pipe';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    providers: [NumberFormatPipe]
})
export class ProductDetailsComponent implements OnInit {
    id: string = '';
    item: Item = {
        id: '',
        address: {
            state_name: ''
        },
        condition: '',
        free_shipping: false,
        title: '',
        price: {
            currency: '',
            amount: 0,
            decimals: ''
        },
        picture: '',
        sold_quantity: 0,
        description: ''

    };
    author = {};

    constructor(
        private _Activatedroute: ActivatedRoute,
        private productService: ProductsService,
        private router: Router,
        private formatPipe: NumberFormatPipe
    ) { }

    formatNumber(number: number): string {
        return this.formatPipe.transform(number);
    }

    getState(condition: string): any {
        if (condition === 'new') {
            return 'Nuevo';
        }
        return 'Usado';
    }

    getSoldQuantityText(soldQuantity: number): any {
        if (soldQuantity === 1) {
            return `${soldQuantity} vendido`;
        }
        return `${soldQuantity} vendidos`;
    }

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
