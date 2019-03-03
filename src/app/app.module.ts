import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageLainComponent } from './page-lain/page-lain.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ElectricUsageCardComponent } from './electric-usage-card/electric-usage-card.component';
import { StatusColorDirective } from './status-color.directive';
import { DeviceChartComponent } from './device-chart/device-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { PassServiceComponent } from './pass-service/pass-service.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Page', component: PageLainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ElectricUsageCardComponent,
    StatusColorDirective,
    DeviceChartComponent,
    PassServiceComponent,
    PageLainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
