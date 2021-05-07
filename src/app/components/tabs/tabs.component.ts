import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
@Input() tableItems$:any;
tabItems:any;

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.tableItems$.subscribe(x=>{
      this.tabItems=x;
      this.cd.detectChanges();
    });
  }

}
