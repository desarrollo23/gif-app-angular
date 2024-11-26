import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifsService } from "../../services/gifs.service";

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Search:</h5>
        <input 
            type="text" 
            name="" 
            id="" 
            class="form-control" 
            placeholder="Search..."
            (keyup.enter)="onClickEnter()"
            #txtInputValue>
    `
})
export class SearchComponent {

    constructor(private gifsService: GifsService) {}

    @ViewChild('txtInputValue')
    public tagInput!: ElementRef<HTMLInputElement>;

    onClickEnter() {
        const newTag = this.tagInput.nativeElement.value;

        this.gifsService.searchTag( newTag );
        this.tagInput.nativeElement.value = '';
    }
}