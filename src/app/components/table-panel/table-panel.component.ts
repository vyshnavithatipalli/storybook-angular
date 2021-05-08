import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.scss']
})
export class TablePanelComponent implements OnInit {
@Input() item;
  constructor() { }

  ngOnInit(): void {
  }

}
