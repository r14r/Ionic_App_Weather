import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { WeatherProvider } from "../../providers/weather/weather";
import { Storage } from "@ionic/storage";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  city_input: string;
  City_name;
  Country;
  temperature;
  description;
  wind;
  img_src;


  constructor(public navCtrl: NavController, private weather: WeatherProvider, private storage: Storage) {  }

  // ionViewWillEnter() {
  //   this.storage.get('city').then(city => {
  //     if (city != null) {
  //       this.city_input = JSON.parse(city);
  //     } else {
  //       this.sendCityName();
  //     }
  //
  //     this.sendCityName();
  //   })
  //
  //
  // }


  sendCityName() {
    this.weather.getCity(this.city_input);
    this.weather.getWeather().subscribe(res => {
      console.log(res);
      this.City_name = res['name'];
      this.Country = res['sys'].country;
      this.temperature = Math.round(res['main'].temp);
      this.description = res['weather']['0'].description;
      this.wind = Math.round(res['wind'].speed);
      let icon = res['weather']['0'].icon;
      this.img_src = `http://openweathermap.org/img/w/${icon}.png`;
      this.city_input = '';
    });

  }



}
