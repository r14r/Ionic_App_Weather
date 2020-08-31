import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {      title: 'Home',      url: '/home',      icon: 'home'    },
    {      title: 'List',      url: '/list',      icon: 'list'    },
    {      title: 'Weather 1', url: '/weather1',  icon: 'weather' },
    {      title: 'Weather 2', url: '/weather2',  icon: 'weather' },
    {      title: 'Weather 3', url: '/weather3',  icon: 'weather' },
    {      title: 'Weather 4', url: '/weather4',  icon: 'weather' },
    {      title: 'Weather 5', url: '/weather5',  icon: 'weather' },
    {      title: 'Weather 6', url: '/weather6',  icon: 'weather' },
    {      title: 'Weather 7', url: '/weather7',  icon: 'weather' },
    {      title: 'Weather 8', url: '/weather8',  icon: 'weather' },
    {      title: 'Weather 9', url: '/weather9',  icon: 'weather' }    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
