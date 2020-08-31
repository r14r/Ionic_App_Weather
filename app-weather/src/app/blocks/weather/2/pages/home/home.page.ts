import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events } from '@ionic/angular';

import { TITLES } from '../../assets/constants/titles';
import { Weather2Service } from '../../services/weather.service';

@Component({
    selector: 'app-weather2',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public weather: any;
    public city: string;
    public title: string;
    public lat: string;
    public lng: string;

    constructor(
        public navCtrl: NavController,
        private weatherService: Weather2Service,
        public navParams: NavParams,
        public events: Events
    ) {
        this.title = TITLES.home;
        this.events.subscribe('show-forecast', (data) => {
            this.city = data.city;
            this.lat = data.lat;
            this.lng = data.lng;
        });
    }

    ngOnInit() {
        if (!this.city && !this.lat) {
            this.weatherService.getCoordinates().then(coordinates => {
                this.weatherService.getCurrentForecastInHoursByCoordinates(coordinates).subscribe(weather => {
                    this.city = weather.city.name;
                    this.weather = (weather.list as Array<any>).map(item => {
                        return {
                            data: item.dt_txt,
                            temp: item.main.temp,
                            humidity: item.main.humidity,
                            pressure: item.main.pressure,
                            weather: item.weather[0].description,
                            wind_speed: item.wind.speed
                        };
                    });
                });
            });
        } else if (this.city) {
            this.weatherService.getCurrentForecastInHoursByName(this.city).subscribe(weather => {
                this.weather = (weather.list as Array<any>).map(item => {
                    return {
                        data: item.dt_txt,
                        temp: item.main.temp,
                        humidity: item.main.humidity,
                        pressure: item.main.pressure,
                        weather: item.weather[0].description,
                        wind_speed: item.wind.speed
                    };
                });
            });
        } else {
            this.weatherService.getCurrentForecastInHoursByCoordinates({ lat: this.lat, lon: this.lng }).subscribe(weather => {
                this.city = weather.city.name;
                this.weather = (weather.list as Array<any>).map(item => {
                    return {
                        data: item.dt_txt,
                        temp: item.main.temp,
                        humidity: item.main.humidity,
                        pressure: item.main.pressure,
                        weather: item.weather[0].description,
                        wind_speed: item.wind.speed
                    };
                });
            });
        }
    }

    showDetails(weatherDetails) {
        this.navCtrl.navigateForward('/w2/details', weatherDetails);
    }

    myHeaderFn(record, recordIndex, records) {
        if (records[recordIndex - 1]) {
            if (records[recordIndex - 1].data.slice(0, 10).localeCompare(records[recordIndex].data.slice(0, 10)) === 0) {
                return null;
            }
        }
        return records[recordIndex].data.slice(0, 10);
    }

}
