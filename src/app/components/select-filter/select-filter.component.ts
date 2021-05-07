import { Component, Input, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent implements OnInit {
@Input() hiddenColumnsList:any[];
@Output() toggleAllSelectEvent:EventEmitter<any>;
@Output() togglePerOneEvent:EventEmitter<any>;
@ViewChild('allselected') private allselected:MatOption;
columnsForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.toggleAllSelectEvent=new EventEmitter();
    this.togglePerOneEvent=new EventEmitter();
  }

  ngOnInit(): void {
    this.columnsForm=this.fb.group({
      columnControl:new FormControl('')
    });
  }

  toggleAllSelection(){
    this.toggleAllSelectEvent.emit({
      allSelected:this.allselected,
      columnsForm:this.columnsForm,
    });
  }

  togglePerOne(col:string){
    this.togglePerOneEvent.emit({
      col:col,
      allSelected:this.allselected,
      columnsForm:this.columnsForm,
    })
  }

}
