import { Component, OnInit } from '@angular/core';
import { ReportingService, MonthlyUser } from '../reporting.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-historical-chart',
  templateUrl: './historical-chart.component.html',
  styleUrls: ['./historical-chart.component.css']
})
export class HistoricalChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  monthlyUsers: MonthlyUser[] = []; // To store the retrieved monthly users

  constructor(private reportingService: ReportingService) {}

  ngOnInit(): void {
    this.fetchHistoricalData();
  }

  fetchHistoricalData(): void {
    // Replace with your actual API endpoint to fetch historical user data
    this.reportingService.getMonthlyUsers().subscribe(
      (data: MonthlyUser[]) => {
        this.monthlyUsers = this.sortMonths(data);
        this.initializeChart();
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

  sortMonths(data: MonthlyUser[]): MonthlyUser[] {
    const monthOrder = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return data.sort((a, b) => {
      return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
    });
  }

  initializeChart(): void {
    const categories = this.monthlyUsers.map(user => user.month); // e.g., ['January', 'February']
    const data = this.monthlyUsers.map(user => user.count); // e.g., [5, 10]

    this.chartOptions = {
      chart: {
        type: 'column' // Set to column for bar graph
      },
      title: {
        text: 'Historical User Growth'
      },
      xAxis: {
        categories: categories,
        title: { text: 'Month' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Users' }
      },
      series: [{
        name: 'Users',
        type: 'column', // Column chart type
        data: data
      }],
      tooltip: {
        valueSuffix: ' users'
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      }
    };
  }
}
