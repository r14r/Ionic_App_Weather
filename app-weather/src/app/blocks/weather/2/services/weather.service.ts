import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { WeatherData } from './weather-item';

function getWindow(): any {
    return window;
}

@Injectable()
export class Weather2Service {

    // appid = '25fbfa1ce2c006ee671a84feda01e493';
    private apiKey = '25fbfa1ce2c006ee671a84feda01e493';
    baseUrl = 'https://api.openweathermap.org/data/2.5/';
    // url;

    constructor(public httpClient: HttpClient) { }

    getCurrentForecastInHoursByName(cityName) {
        const type = 'forecast?';
        const search: URLSearchParams = new URLSearchParams();
        search.set('q', cityName);
        search.set('appid', this.apiKey);
        search.set('units', 'metric');

        return this.httpClient.get<WeatherData>(this.baseUrl + type + search.toString()).pipe(
            map(res => {
                return res;
            }),
            catchError(error => {
                return throwError('Something went wrong ;)');
            })
        );
    }

    getCurrentForecastInHoursByCoordinates(coordinates) {
        const type = 'forecast?';
        const search: URLSearchParams = new URLSearchParams();
        search.set('lat', coordinates.lat);
        search.set('lon', coordinates.lng);
        search.set('appid', this.apiKey);
        search.set('units', 'metric');

        return this.httpClient.get<WeatherData>(this.baseUrl + type + search.toString()).pipe(
            map(res => {
                return res;
            }),
            catchError(error => {
                return throwError('Something went wrong ;)');
            })
        );
    }

    getCoordinates() {
        return new Promise(res => {
            this.setCoordinates(coordinates => {
                res(coordinates);
            });
        });
    }

    setCoordinates(callback) {
        const window = getWindow();
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition((position) => {
                callback({ lat: position.coords.latitude, lng: position.coords.longitude });
            });
        }
    }

}
