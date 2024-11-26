import { NgModule } from "@angular/core";
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SideBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SideBarComponent
    ]
})
export class SharedModule {

}