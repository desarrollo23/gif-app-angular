import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    private _tagsHistory: string[] = [];
    
    private GIPHY_URL: string = 'https://api.giphy.com/v1/gifs';
    private GIPHY_API_KEY: string = '1PdxggWtVC6iVoFWloxwEfzZIbztAY84';
    private gifList: Gif[] = [];

    constructor( private httpClient: HttpClient ) {
        this.getLocalStorage();
        this.searchByLastTag();
    }

    get tagsHistory(): string[] {
        return [...this._tagsHistory];
    }

    get getGifList(): Gif[] {
        return this.gifList;
    }

    set setTagsHistory( tags: string [] ) {
        this._tagsHistory = tags;
        this.gifList = [];
    }

    async searchTag( tag: string) : Promise<void> {

        if(tag.trim() === '') {
            return;
        }

        await this.getGifsByTagDescription(tag);
        this.validateHistory( tag );
    }

    validateHistory( tag: string ): void {
        const newTag = tag.toLowerCase();

        const newTagsHistory = this._tagsHistory.filter(h => h !== newTag);
        this._tagsHistory = newTagsHistory;
        this._tagsHistory.unshift(newTag);

        this._tagsHistory = this._tagsHistory.splice(0,15);
        this.saveLocalStorage();
    }

    public saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify( this._tagsHistory ));
    }

    private getLocalStorage(): void {

        if(!localStorage.getItem('history')) 
            return;
        
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    }

    async getGifsByTagDescription( tag: string ) {
        const params = new HttpParams()
        .set('api_key', this.GIPHY_API_KEY)
        .set('q', tag)
        .set('limit', 10);

        this.httpClient.get<SearchResponse>(`${this.GIPHY_URL}/search`, { params })
            .subscribe( resp => { 
                this.gifList = resp.data;
                console.log(this.gifList)
             });
    }

    public searchByLastTag(): void {

        if(this._tagsHistory.length === 0)
             return;

        const lastTag = this._tagsHistory[0];
        this.searchTag( lastTag );
    }
}