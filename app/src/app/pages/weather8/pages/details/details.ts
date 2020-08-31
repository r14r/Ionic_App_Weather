import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public weather: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weather = navParams.data;
  }
}
