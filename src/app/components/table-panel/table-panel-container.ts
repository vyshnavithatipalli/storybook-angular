import { Component, Input } from "@angular/core";
import { TableNestItemContainer } from "../table-nest-item/table-nest-item.conatiner";


@Component({
template:'<app-table-panel [item]="item"></app-table-panel>',

})
export class TablePanelContainer extends TableNestItemContainer{
@Input() item;
}