import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Weather1Service {
    http: any;
    apiKey: string;
    conditionsUrl: string;
    searchUrl: string;

    constructor(http: HttpClient) {
        this.http = http;
        this.apiKey = '06922eb1541048bb';
        this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
        this.searchUrl = 'http://localhost:8100/search/aq?query=';
    }

    getWeather(zmw) {
        return this.http.get(this.conditionsUrl + 'zmw:' + zmw + '.json');
    }

    searchCities(searchStr) {
        return this.http.get(this.searchUrl + searchStr);
    }

}
