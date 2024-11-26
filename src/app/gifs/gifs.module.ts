import { NgModule } from "@angular/core";
import { HomePageComponent } from "./pages/home/home-page.component";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./components/search/search.component";
import { CardListComponent } from "./components/card-list/card-list.component";

@NgModule({
    declarations: [
        HomePageComponent,
        SearchComponent,
        CardListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomePageComponent
    ]
})
export class GifModule {

}