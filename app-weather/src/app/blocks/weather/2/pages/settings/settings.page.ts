import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Events, ToastController } from '@ionic/angular';

// @TODO
// import { Keyboard } from '@ionic-native/keyboard';

import { Weather2Service } from '../../services/weather.service';

import { TITLES } from '../../assets/constants/titles';
import { CITIES } from '../../assets/constants/cities';


@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
    // @TODO
    // providers: [Keyboard]
})
export class SettingsPage implements OnInit {

    public city: string;
    public title: string;
    public cities: string[];
    public showCitiesList = false;
    public coordinates: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        // @TODO
        // private keyboard: Keyboard,
        public events: Events,
        private toastController: ToastController,
        private wp: Weather2Service
    ) {
        this.title = TITLES.settings;
    }

    ngOnInit(): void {
        this.coordinates = this.wp.getCoordinates();
    }

    getLocation(coordinates) {
        this.showForecastByCoordinatesOnMap(coordinates);
    }

    selectCity(city) {
        this.city = city;
        this.showCitiesList = false;
    }

    getCities() {
        if (this.city && this.city.trim() !== '') {
            this.cities = CITIES.filter((item) => {
                return (item.toLowerCase().indexOf(this.city.toLowerCase()) > -1);
            }).slice(0, 3);
            this.showCitiesList = true;
        } else {
            this.showCitiesList = false;
        }
    }

    async showForecastByCity() {
        // @TODO
        // this.keyboard.close();

        this.events.publish('show-forecast', { city: this.city });
        const toast = await this.toastController.create({
            message: `see forecast for ${this.city} on HomePage`,
            duration: 3000,
            position: 'bottom',
            // @TODO
            // dismissOnPageChange: true,
            showCloseButton: true,
            closeButtonText: 'ok'
        });
        toast.present();
        this.city = '';
    }

    async showForecastByCoordinatesOnMap(coordinates) {
        this.events.publish('show-forecast', { lat: coordinates.lat, lng: coordinates.lng });
        const toast = await this.toastController.create({
            message: `see forecast for this location on HomePage`,
            duration: 3000,
            position: 'bottom',
            // @TODO
            // dismissOnPageChange: true,
            showCloseButton: true,
            closeButtonText: 'ok'
        });
        toast.present();
    }

    showKeyboard() {
        // @TODO
        // this.keyboard.show();
    }

}
