import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import {  ChartOptions,ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
@Input() data;
public barChartType: ChartType;
public barChartLabels:Label[];
public barChartData:ChartDataSets[];
public barChartLegend;
public barChartPlugins;
public barChartOptions:ChartOptions;
public barChartDataCopy:any;
public barChartOptionsCopy:any;



  constructor() {
    this.barChartOptions={
    responsive:true,}
    this.barChartPlugins=[];
   }

  ngOnInit(): void {
    this.barChartType=this.data.data.chartType;
    this.barChartLegend=this.data.data.showLegend;
    this.barChartLabels=this.data.data.chartLabels;
    this.barChartData=this.data.data.chartData;
    this.barChartDataCopy=JSON.parse(JSON.stringify(this.barChartData));
    this.barChartOptionsCopy=JSON.parse(JSON.stringify(this.barChartOptions))
  }

}
