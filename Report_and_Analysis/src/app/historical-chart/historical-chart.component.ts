import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ReportingService, MonthlyUser } from '../reporting.service';

@Component({
  selector: 'app-historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.css']
})
export class HistoricalChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Initialize as empty
  monthlyUserData: MonthlyUser[] = []; // Holds the fetched data

  constructor(private reportingService: ReportingService) { }

  ngOnInit(): void {
    // Fetch data when component initializes
    this.reportingService.getMonthlyUsers().subscribe({
      next: (data: MonthlyUser[]) => {
        console.log('Data fetched from backend: ', data); // Add this to check the response
        this.monthlyUserData = data;
        this.initializeChart();
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }

  initializeChart(): void {
    const months = this.monthlyUserData.map(item => item.month); // Extract month names
    const userCounts = this.monthlyUserData.map(item => item.count); // Extract user counts

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly User Growth'
      },
      xAxis: {
        categories: months, // Use months from the fetched data
        title: {
          text: 'Month'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Users'
        }
      },
      series: [{
        name: 'Users',
        type: 'column',
        data: userCounts // Use user counts from the fetched data
      }]
    };
  }
}
