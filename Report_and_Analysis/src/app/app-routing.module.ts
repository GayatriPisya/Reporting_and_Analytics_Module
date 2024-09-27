import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { HistoricalChartComponent } from './historical-chart/historical-chart.component';

const routes: Routes = [
  { path: 'report', component: ReportComponent },
  { path: 'historical-chart', component: HistoricalChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
