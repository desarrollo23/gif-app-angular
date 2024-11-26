import { Component } from "@angular/core";
import { GifsService } from "../../../gifs/services/gifs.service";

@Component({
    selector: 'shared-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.css'
})
export class SideBarComponent {

    constructor(private gifsService: GifsService) {}

    get tagsHistory(): string[] {
        return this.gifsService.tagsHistory;
    }

    onClickTagHistory( tag: string ): void {
        this.gifsService.searchTag( tag );
    }

    onClickResetHistory(): void {
        this.gifsService.setTagsHistory = [];
        localStorage.removeItem('history');
    }

    onClickRemoveTag( tag: string ) {
        const tagsHistory = this.gifsService.tagsHistory.filter(t => t !== tag);
        this.gifsService.setTagsHistory = tagsHistory;
        this.gifsService.saveLocalStorage();
        this.gifsService.searchByLastTag();
    }
}