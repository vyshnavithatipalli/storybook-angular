import { AfterViewInit, ChangeDetectorRef, Component, Input } from "@angular/core";
import { TableNestItemContainer } from "../table-nest-item/table-nest-item.conatiner";

@Component({
    selector:'app-table-rows-container',
    template:'<app-table-rows [item]="item"></app-table-rows>',
})
export class TableRowsContainer extends TableNestItemContainer implements AfterViewInit{
    @Input() item;
    constructor(private cd:ChangeDetectorRef){
        super();
    }
    ngAfterViewInit(){
        this.cd.detectChanges();
    }
}