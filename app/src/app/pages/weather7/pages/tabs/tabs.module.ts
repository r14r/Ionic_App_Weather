import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { CurrentWeatherPageModule } from '../current-weather/current-weather.module';
import { ForecastPageModule } from '../forecast/forecast.module';
import { UvIndexPageModule } from '../uv-index/uv-index.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    CurrentWeatherPageModule,
    ForecastPageModule,
    UvIndexPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
