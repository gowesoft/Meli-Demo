import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchBoxComponent } from './shared/search-box/search-box.component';


@NgModule({
    declarations: [
        AppComponent,
        ProductDetailsComponent,
        SearchBoxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
