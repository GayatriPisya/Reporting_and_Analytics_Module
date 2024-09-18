import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { RealtimeChartComponent } from './realtime-chart/realtime-chart.component';
import { HistoricalChartComponent } from './historical-chart/historical-chart.component';

@NgModule({
  declarations: [AppComponent, RealtimeChartComponent, HistoricalChartComponent],
  imports: [BrowserModule, HighchartsChartModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
