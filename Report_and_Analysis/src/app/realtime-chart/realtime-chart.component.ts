import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-realtime-chart',
  templateUrl: './realtime-chart.component.html',
  styleUrls: ['./realtime-chart.component.css']
})
export class RealtimeChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  chart: Highcharts.Chart | undefined;

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.initializeChart();
    this.webSocketService.getMessages().subscribe((data) => {
      this.updateChart(data);
    });
  }

  initializeChart(): void {
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Real-time Data'
      },
      series: [{
        name: 'Live Data',
        data: []
      }]
    };
  }

  updateChart(data: any): void {
    if (this.chart) {
      this.chart.series[0].addPoint(data, true, true);
    }
  }
}
