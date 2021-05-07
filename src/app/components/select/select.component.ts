import { Component, Input, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
@Input() selectData;
@Input() options;
@Input() selected;
@ViewChild(MatSelect) matSelect:MatSelect;
@Output() selectionChange:EventEmitter<any>=new EventEmitter<any>();
dashboardGroupItems:any;
emitData:any;
filterValues$:Observable<any>;

  constructor() { }

  ngOnInit(): void {
   this.options= this.selectData.options;
   this.selected=this.selectData.selected;
  }

  updateSelected(event:any,category:any){
    if(event.isUserInput){
      this. emitData={
        category:category,
        value:event.source.value};

      }
      this.selectionChange.emit(this.emitData);
    }
  }


