import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  @Input() data;
public radarChartType: ChartType;
public radarChartLabels:Label[];
public radarChartData:ChartDataSets[];
public radarChartOptions:ChartOptions;




  constructor() {
    this.radarChartType='radar';
    this.radarChartOptions={
    responsive:true,}
    
   }

  ngOnInit(): void {
    this.radarChartLabels=this.data.chartLabels;
    this.radarChartData=this.data.chartData;
  }

}
