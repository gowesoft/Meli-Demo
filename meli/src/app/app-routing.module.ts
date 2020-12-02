import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'details',
        component: ProductDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
