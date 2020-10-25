import {Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/cameras/cameras.module').then(m => m.CamerasModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/reporting/reporting.module').then(m => m.ReportingModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),
      }
    ]
  }
];
