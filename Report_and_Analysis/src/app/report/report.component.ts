import { Component, OnInit } from '@angular/core';
import { ReportingService, MonthlyUser } from '../reporting.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  monthlyUsers: MonthlyUser[] = [];
  errorMessage: string = '';

  constructor(private reportingService: ReportingService) {}

  ngOnInit(): void {
    this.fetchMonthlyUsers();
  }

  fetchMonthlyUsers() {
    this.reportingService.getMonthlyUsers().subscribe(
      (data: MonthlyUser[]) => {
        this.monthlyUsers = data;
        this.initializeChart();
      },
      (error) => {
        this.errorMessage = error;
        console.error('There was an error!', error);
      }
    );
  }

  initializeChart() {
    const categories = this.monthlyUsers.map(user => user.month);
    const data = this.monthlyUsers.map(user => user.count);

    this.chartOptions = {
      chart: { type: 'column' },
      title: { text: 'Monthly User Growth' },
      xAxis: { categories: categories, title: { text: 'Month' } },
      yAxis: { min: 0, title: { text: 'Users' } },
      series: [{ name: 'Users', type: 'column', data: data }]
    };
  }
}
