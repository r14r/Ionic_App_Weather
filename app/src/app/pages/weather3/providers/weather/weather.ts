import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '99dfe35fcb7de1ee';
  //apiKey = '5f386d0eea792de8e4b3a55cbe7680e4';
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q'
   // this.url = 'api.openweathermap.org/data/2.5/weather?q=London'
  }
  getWeather(city, state){
      return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
    }
}
