import { Component, OnInit } from '@angular/core';

import { IconMapService } from '../../services/icon-map.service';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-page-forecast',
  templateUrl: 'forecast.page.html',
  styleUrls: ['forecast.page.scss']
})
export class ForecastPage implements OnInit {
  forecast: Array<Array<Weather>> = [];

  constructor(
    public iconMap: IconMapService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.weatherService.forecast().subscribe(f => {
      this.forecast = f;
    });
  }
}
