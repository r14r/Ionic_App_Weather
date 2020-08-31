import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Forecast } from '../models/forecast';
import { UVIndex } from '../models/uv-index';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private appId = '0b663aa131e512cef7bc3de17fe39bb7';
  private baseUrl = 'http://api.openweathermap.org/data/2.5';

  private latitude = 43.5709016;
  private longitude = -89.7707362;

  private useLocalData = false;

  constructor(private http: HttpClient) {}

  current(): Observable<Weather> {
    return (this.useLocalData
      ? this.http.get('assets/data/weather.json')
      : this.http.get(
          `${this.baseUrl}/weather?lat=${this.latitude}&lon=${
            this.longitude
          }&appid=${this.appId}`
        )
    ).pipe(map((res: any) => this.unpackWeather(res)));
  }

  forecast(): Observable<Forecast> {
    return (this.useLocalData
      ? this.http.get('assets/data/forecast.json')
      : this.http.get(
          `${this.baseUrl}/forecast?lat=${this.latitude}&lon=${
            this.longitude
          }&appid=${this.appId}`
        )
    ).pipe(map((res: any) => this.unpackForecast(res)));
  }

  uvIndex(): Observable<UVIndex> {
    return (this.useLocalData
      ? this.http.get('assets/data/uvi.json')
      : this.http.get(
          `${this.baseUrl}/uvi?lat=${this.latitude}&lon=${
            this.longitude
          }&appid=${this.appId}`
        )
    ).pipe(map((res: any) => this.unpackUVIndex(res)));
  }

  private unpackForecast(res: any): Forecast {
    let currentDay: Array<Weather>;
    let prevDate: number;
    const forecast: Forecast = [];

    res.list.forEach(item => {
      const w = this.unpackWeather(item);
      if (w.date.getDate() !== prevDate) {
        prevDate = w.date.getDate();
        currentDay = [];
        forecast.push(currentDay);
      }
      currentDay.push(w);
    });

    return forecast;
  }

  private unpackUVIndex(res: any): UVIndex {
    const descriptions = ['Low', 'Moderate', 'High', 'Very High', 'Extreme'];
    const level = this.riskLevel(res.value);
    return {
      value: res.value,
      riskLevel: level,
      riskLevelDescription: descriptions[level]
    };
  }

  private unpackWeather(res: any): Weather {
    return {
      description: res.weather[0].main,
      temperature: res.main.temp,
      condition: res.weather[0].id,
      date: new Date(res.dt * 1000)
    };
  }

  private riskLevel(value: number) {
    if (value < 3) {
      return 0;
    }
    if (value < 6) {
      return 1;
    }
    if (value < 8) {
      return 2;
    }
    if (value < 11) {
      return 3;
    }
    return 4;
  }
}
