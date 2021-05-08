import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-rows',
  templateUrl: './table-rows.component.html',
  styleUrls: ['./table-rows.component.scss']
})
export class TableRowsComponent implements OnInit,AfterViewInit {
@Input() item;
actions:any;
fetchedColumns:any;
visibleColumnsList:string[]=[];
tableData:any;
dataSource:any;

  constructor(private cd :ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
this.tableData=this.item;
this.fetchedColumns=this.tableData.displayedColumns;
this.getVisibleColumns(this.fetchedColumns);
this.dataSource=new MatTableDataSource<Object>(this.tableData.ELEMENT_DATA);
this.actions=this.tableData.Actions;
this.cd.detectChanges();
  }
  getVisibleColumns(fetchedColumns:any){
    fetchedColumns.forEach((data)=>{
      this.visibleColumnsList.push(data.name);
    })
  }

}
