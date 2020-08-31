import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Weather1Service } from '../../services/weather.service';

@Component({
    selector: 'app-weather1',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    weather: any;
    searchStr: string;
    results: any;
    zmw: any;

    constructor(public navCtrl: NavController, private weatherService: Weather1Service) {

    }

    ngOnInit() {
        this.getDefaultCity();
        this.weatherService.getWeather(this.zmw)
            .subscribe(result => {
                this.weather = result.json().current_observation;
                console.log(result.json())
            })
    }

    getDefaultCity() {
        this.zmw = '00000.25.33345';
        if (localStorage.getItem('location') !== null) {
            this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
        }
    }

    getQuery() {
        this.weatherService.searchCities(this.searchStr)
            .subscribe(res => {
                console.log(res.json());
                this.results = res.json().RESULTS;
            })
    }

    chooseCity(location) {
        console.log(location);
        this.results = [];
        this.searchStr = '';
        this.weatherService.getWeather(location.zmw)
            .subscribe(result => {
                this.weather = result.json().current_observation;
                console.log(result.json());
            });
    }

}
