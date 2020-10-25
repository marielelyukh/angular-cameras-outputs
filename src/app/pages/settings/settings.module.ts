import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsRoutes } from './settings.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
  ],
  declarations: [
    SettingsComponent
  ],
  entryComponents: []
})
export class SettingsModule { }
