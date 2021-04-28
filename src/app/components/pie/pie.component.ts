import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  @Input() data;
  public pieChartType: ChartType;
  public pieChartLabels:Label[];
  public pieChartData:SingleDataSet;
  public pieChartLegend;
  public pieChartPlugins;
  public pieChartOptions:ChartOptions;
  
  
  
  
    constructor() {
      this.pieChartType='pie';
      this.pieChartOptions={
      responsive:true,}
      this.pieChartPlugins=[];
     }
  
    ngOnInit(): void {
      this.pieChartLabels=this.data.chartLabels;
      this.pieChartLegend=this.data.showLegend;
      this.pieChartData=this.data.chartData;
    }

}
