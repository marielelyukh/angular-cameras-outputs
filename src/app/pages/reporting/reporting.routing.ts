import { Routes } from '@angular/router';
import { ReportingComponent } from './reporting.component';
import { ROUTING_REPORTING_PATH } from '../../shared/constants/routing.constants';

export const ReportingRoutes: Routes = [
  {
    path: ROUTING_REPORTING_PATH,
    component: ReportingComponent
  }
];
