import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CamerasComponent } from './cameras.component';
import { CamerasRoutes } from './cameras.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CamerasRoutes),
  ],
  declarations: [
    CamerasComponent
  ],
  entryComponents: []
})
export class CamerasModule { }
