import { Routes } from '@angular/router';
import { CamerasComponent } from './cameras.component';
import { ROUTING_CAMERAS_PATH } from '../../shared/constants/routing.constants';

export const CamerasRoutes: Routes = [
  {
    path: ROUTING_CAMERAS_PATH,
    component: CamerasComponent
  }
];
