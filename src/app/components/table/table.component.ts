import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { TableNestDirectiveDirective } from 'src/app/directives/table-nest-directive.directive';
import { tableNestItems } from 'src/app/table-nest-tem';
import { TableNestItemContainer } from '../table-nest-item/table-nest-item.conatiner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations:[
    trigger("detailExpand",[
      state("collapsed",style({height:"0",minHeight:"0"})),
      state("expanded",style({height:"*"})),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4,0.0,0.2,1)")
      )
    ])
  ]
})
export class TableComponent implements OnInit,AfterViewInit {
@Input("item") item;
@Output() drawerButtonClicked:EventEmitter<any>;
@ViewChildren(TableNestDirectiveDirective)
TableNestContent:QueryList<TableNestDirectiveDirective>;
dataSource;any;
dataSubject:BehaviorSubject<any[]>;
actions:any;
fetchedColumns:any;
visibleColumnsList:string[];
tableData:any;
buttonPopover:any;
expandedElement:any;
nestedTableId:any;
expandedRow$:any;
@ViewChild(MatSort) sort : MatSort;


  constructor(private cd:ChangeDetectorRef,private cfr:ComponentFactoryResolver) {
    this.drawerButtonClicked=new EventEmitter();
    this.buttonPopover=[
      {
        key:"value",
        key1:"value1"
      }
    ];
    this.visibleColumnsList=[];
    this.dataSubject=new BehaviorSubject<any[]>([]);
    this.nestedTableId=null;
    this.expandedRow$=new BehaviorSubject<any>(null);
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
this.tableData=this.item;
this.fetchedColumns=this.tableData.displayedColumns;
this.dataSource=new MatTableDataSource<Object>(this.tableData.ELEMENT_DATA);
this.dataSource.sort=this.sort;
this.actions=this.tableData.ACTIONS;
this.cd.detectChanges;
this.expandedRow$.subscribe(expanded=>{
  let body=expanded;
  if(this.nestedTableId!=null){

  }
});
  }
toggleNestedRow(row:any,colProperty:any){
  this.expandedElement=this.expandedElement==row?null:row;
  if(this.expandedElement!=null){
    this.nestedTableId=colProperty.tableId;
    this.expandedRow$.next(this.expandedElement);
  }
}


loadContents=(data)=>{
  this.TableNestContent.forEach((template)=>{
    this.loadContent(template,data);
  });
  this.cd.detectChanges();
};





loadContent=(template:TableNestDirectiveDirective,data:any)=>{
  const viewContainerRef=template.viewContainerRef;
  viewContainerRef.clear();
  const componentFactory=this.cfr.resolveComponentFactory(
    tableNestItems[data.component]
  );
  const componentRef=viewContainerRef.createComponent(componentFactory,0);
  const instance=componentRef.instance as TableNestItemContainer;
  instance.item=data;

};


extractParamsFromRow(row,paramFields){
  const params=[];
  for(var col in row){
    if(paramFields.includes(col))
    params.push({
      "name":col,
      "value":row[col]
    });
  }
  return params;
}

toggleDrawer(url,row,paramFields){
  const params=this.extractParamsFromRow(row,paramFields);
  this.drawerButtonClicked.emit({
    url:url,
    params:params
  });
}

addItem(visibleColumns:string[]){
  this.visibleColumnsList=visibleColumns;
}
}
