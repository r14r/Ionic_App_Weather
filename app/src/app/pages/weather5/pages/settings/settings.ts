import {Component} from '@angular/core';
import {NavController, NavParams, Tabs} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {HomePage} from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private tabs: Tabs) {
  }

  ionViewDidLoad() {
    this.storage.get('city')
      .then(value => {
        if (value) {
          this.city = value;
        } else {
          this.city = 'Esbjerg';
        }
      });
  }

  saveForm() {
    console.log('City is now', this.city);
    this.storage.set('city', this.city)
      .then(value => {
        this.city = value;
        this.tabs.select(0)
      });
  }
}
