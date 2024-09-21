import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { ReportingService } from './reporting.service';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule  // Add Highcharts module here
  ],
  providers: [ReportingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
