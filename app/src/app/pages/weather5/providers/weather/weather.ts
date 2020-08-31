import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class WeatherProvider {
  private API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private API_POSTFIX = '&units=metric&appid=f6ce3c4825db3516f814e63dfe5a5b69';

  constructor(private http: HttpClient) {
  }

  getWeather(city: string) {
    return this.http.get(this.API_ENDPOINT + city + this.API_POSTFIX);
  }

}
