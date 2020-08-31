import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { CurrentWeatherPage } from '../current-weather/current-weather.page';
import { ForecastPage } from '../forecast/forecast.page';
import { UvIndexPage } from '../uv-index/uv-index.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'current-weather',
        outlet: 'current-weather',
        component: CurrentWeatherPage
      },
      {
        path: 'forecast',
        outlet: 'forecast',
        component: ForecastPage
      },
      {
        path: 'uv-index',
        outlet: 'uv-index',
        component: UvIndexPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(current-weather:current-weather)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
