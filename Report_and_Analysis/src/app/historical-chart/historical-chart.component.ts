import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.css']
})
export class HistoricalChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getHistoricalData().subscribe((data) => {
      this.initializeChart(data);
    });
  }

  initializeChart(data: any[]): void {
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Historical Data'
      },
      series: [{
        name: 'Historical Data',
        type: 'line', // Specify the type of series
        data: data // Provide the actual data
      }]
    };
  }
}
