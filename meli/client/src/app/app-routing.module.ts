import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsComponent } from './search-results/search-results.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
    {
        path: '',
        component: SearchResultsComponent
    },
    {
        path: 'items/search/:query',
        component: SearchResultsComponent
    },
    {
        path: 'items/:id',
        component: ProductDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
