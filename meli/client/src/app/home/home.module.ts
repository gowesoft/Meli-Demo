import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
    declarations: [
        HomeComponent,
        SearchResultsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
