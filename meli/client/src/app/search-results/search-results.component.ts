import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../products/products.service';
import { Item } from '../products/products.model';

import { NumberFormatPipe } from '../shared/number.pipe';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss'],
    providers: [NumberFormatPipe]
})
export class SearchResultsComponent implements OnInit {
    query: string | null | undefined;
    items: Item[] = [];
    categories = [];
    author = {};

    constructor(
        private _Activatedroute: ActivatedRoute,
        private productService: ProductsService,
        private router: Router,
        private formatPipe: NumberFormatPipe
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    formatNumber(number: number): string {
        return this.formatPipe.transform(number);
    }

    goToDetails(id: string): void {
        this.router.navigate([`/items/${id}`]);
    }

    ngOnInit(): void {
        if (this._Activatedroute.snapshot.paramMap.has("query")) {
            this.query = this._Activatedroute.snapshot.paramMap.get("query")!;
            this.productService.getProducts(this.query).subscribe(data => {
                this.categories = data.results.categories;
                this.author = data.results.author;
                this.items = data.results.items;
            });
        }
    }
}
