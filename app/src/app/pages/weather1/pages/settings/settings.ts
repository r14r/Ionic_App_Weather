import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {WeatherService} from '../../services/weather.service';
import {WeatherPage} from '../weather/weather';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit {
  searchStr: string;
  results: any;
  defaultCity: any;
  defaultCityName: string;
  zmw: any;

  constructor(public navCtrl: NavController, private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getDefaultCity()
  }

  getDefaultCity(){
    this.defaultCityName = '';
    if(localStorage.getItem('location') !== null){
      this.defaultCityName = JSON.parse(localStorage.getItem('location')).name;
    }


  }

  getQuery() {
    // console.log(this.searchStr);
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        console.log(res.json());
        this.results = res.json().RESULTS;
      })
  }

  chooseDedefaultCity(location) {
    this.results = [];

    this.defaultCity = location;
    this.defaultCityName =  location.name;
    this.searchStr = location.name;
    this.getDefaultCity();
  }

  saveChanges(){
    localStorage.setItem('location', JSON.stringify(this.defaultCity));
    // TODO: 
    // this.navCtrl.push(WeatherPage);
  }
}
