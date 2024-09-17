import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

// Define the ParkingUsage interface to map the API response
interface ParkingUsage {
  id: string;
  timePeriod: string;
  usageCount: number;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  // Highcharts chart options
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line'  // Specify the chart type
    },
    title: {
      text: 'Real-Time Parking Usage Trends'
    },
    xAxis: {
      categories: []  // This will be dynamically updated with time periods
    },
    yAxis: {
      title: {
        text: 'Usage Count'
      }
    },
    series: [
      {
        type: 'line',  // Specify the series type
        name: 'Usage',
        data: []  // This will be dynamically updated with usage counts
      }
    ]
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch initial data
    this.fetchRealTimeData();

    // Poll the API every 10 seconds to fetch updated data
    interval(10000).subscribe(() => {
      this.fetchRealTimeData();
    });
  }

  // Function to fetch data from the existing API
  fetchRealTimeData() {
    this.http.get<ParkingUsage[]>('http://localhost:8080/api/parking/usage')
      .subscribe(response => {
        // Map the API response to time periods and usage counts
        const timePeriods = response.map(item => item.timePeriod);
        const usageCounts = response.map(item => item.usageCount);

        // Update chart options with the new data
        (this.chartOptions.xAxis as Highcharts.XAxisOptions).categories = timePeriods;
       (this.chartOptions.series?.[0] as Highcharts.SeriesLineOptions).data = usageCounts;

        // Re-render the chart with updated data
        Highcharts.chart('container', this.chartOptions);
      });
  }
}
