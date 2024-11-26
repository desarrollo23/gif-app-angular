import { NgModule } from "@angular/core";
import { HomePageComponent } from "./pages/home/home-page.component";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "./components/search/search.component";
import { CardListComponent } from "./components/card-list/card-list.component";
import { GifCardComponent } from "./components/gif-card/gif-card.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HomePageComponent,
        SearchComponent,
        CardListComponent,
        GifCardComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        HomePageComponent
    ]
})
export class GifModule {

}