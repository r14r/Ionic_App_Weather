import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
    selector: 'page-details',
    templateUrl: 'details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage {

    public weather: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.weather = navParams.data;
    }
}
