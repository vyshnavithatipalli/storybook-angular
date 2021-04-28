import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
@Input() data;
public lineChartType: ChartType;
public lineChartLabels:Label[];
public lineChartData:ChartDataSets[];
public lineChartLegend;
public lineChartPlugins;
public lineChartOptions:ChartOptions;
public lineChartColors:Color[];



  constructor() {
    this.lineChartType='line';
    this.lineChartOptions={
    responsive:true,}
    this.lineChartPlugins=[];
    this.lineChartColors=[
      {
        borderColor:'black',
        backgroundColor:'rgba(255,0,,0,0.3)',
      },
    ]
   }
  

  ngOnInit(): void {
    this.lineChartLegend=this.data.showLegend;
    this.lineChartLabels=this.data.chartLabels;
    this.lineChartData=this.data.chartData;
  }

}
