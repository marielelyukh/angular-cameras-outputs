import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReportingComponent } from './reporting.component';
import { ReportingRoutes } from './reporting.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ReportingRoutes),
  ],
  declarations: [
    ReportingComponent
  ],
  entryComponents: []
})
export class ReportingModule { }
