import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherProvider {

  API_KEY = 'a52f93e46e59b1cecebd0c71a0024028';
  city;
  url;

  constructor(public http: HttpClient) {
    this.url = `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}&units=metric&q=`;
  }

  getCity(city) {
    this.city = city;
  }

  getWeather() {
    return this.http.get(this.url + this.city).map(res => res);
  }

}
