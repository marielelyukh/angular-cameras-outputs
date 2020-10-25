import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ROUTING_SETTINGS_PATH } from '../../shared/constants/routing.constants';

export const SettingsRoutes: Routes = [
  {
    path: ROUTING_SETTINGS_PATH,
    component: SettingsComponent
  }
];
