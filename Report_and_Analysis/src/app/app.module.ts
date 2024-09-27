import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReportComponent } from './report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HistoricalChartComponent } from './historical-chart/historical-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
