import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {WeatherProvider} from '../../providers/weather/weather';
import {WeatherData} from '../../entities/WeatherData.entity';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weatherData: WeatherData;
  city: string;

  constructor(public navCtrl: NavController,
              private weatherProvider: WeatherProvider,
              private storage: Storage) {
  }

  ionViewWillEnter() {
    this.loadWeather();
  }

  /**
   * Load weather from city in local storage
   */
  public loadWeather() {
    this.storage.get('city')
      .then(value => {

        if (value) {
          console.log(`City in storage ${value}`);
          this.city = value;
        } else {
          this.city = 'Esbjerg'
        }

        this.weatherProvider.getWeather(this.city)
          .subscribe(result => {
            // Left for reading weather data
            console.log('Weather Data: ', result);
            this.weatherData = result as WeatherData
          });
      });
  }
}
