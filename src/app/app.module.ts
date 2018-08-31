import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { DepthService } from './org-chart/depth.service';
import { RouterModule, Routes } from '@angular/router';
import { InterComponent } from './inter/inter.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent,
    InterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule
    
  ],
  providers: [DepthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


