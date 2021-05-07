import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.scss']
})
export class SummaryListComponent implements OnInit {
@Input() list;
  constructor() { }

  ngOnInit(): void {
  }

}
