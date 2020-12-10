import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
    searchForm: FormGroup = new FormGroup({
        searchTerm: new FormControl('')
    });

    constructor(
        private fb: FormBuilder,
        private router: Router) { }

    goToHome(): void {
        this.router.navigate(['/']);
    }

    onSubmit(): void {
        this.router.navigate([`/items/search/${this.searchForm.value.searchTerm}`]);        
    }
}
