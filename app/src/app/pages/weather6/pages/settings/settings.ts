import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  city: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('city').then(city => {
      if (city != null) {
        this.city = JSON.parse(city);
      } else {

      }
    })
  }

  saveCityInStorage() {
    if (this.city !== null) {
      this.storage.set('city', this.city);
      this.navCtrl.push(HomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
