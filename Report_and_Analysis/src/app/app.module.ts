import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { HistoricalChartComponent } from './historical-chart/historical-chart.component';
import { ReportingService } from './reporting.service';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    HistoricalChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  providers: [ReportingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
