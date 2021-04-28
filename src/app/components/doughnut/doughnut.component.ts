import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  @Input() data;
public doughnutChartType: ChartType;
public doughnutChartLabels:Label[];
public doughnutChartData:SingleDataSet;
public doughnutChartLegend;
public doughnutChartPlugins;
public doughnutChartOptions:ChartOptions;




  constructor() {
    this.doughnutChartType='doughnut';
    this.doughnutChartOptions={
    responsive:true,}
    this.doughnutChartPlugins=[];
   }

  ngOnInit(): void {
    this.doughnutChartLabels=this.data.chartLabels;
    this.doughnutChartLegend=this.data.showLegend;
    this.doughnutChartData=this.data.chartData;
  }

}
