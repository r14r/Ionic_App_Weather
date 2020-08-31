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
        { title: 'Home',      url: '/home',     icon: 'home' },
        { title: 'List',      url: '/list',     icon: 'list' },
        { title: 'Weather 1', url: '/w01', icon: 'list' },
        { title: 'Weather 2', url: '/w02', icon: 'list' },
        { title: 'Weather 3', url: '/w03', icon: 'list' },
        { title: 'Weather 4', url: '/w04', icon: 'list' },
        { title: 'Weather 5', url: '/w05', icon: 'list' },
        { title: 'Weather 6', url: '/w06', icon: 'list' },
        { title: 'Weather 7', url: '/w07', icon: 'list' },
        { title: 'Weather 8', url: '/w08', icon: 'list' },
        { title: 'Weather 9', url: '/w09', icon: 'list' },
        { title: 'Icons 1',   url: '/i01', icon: 'icon' },
        { title: 'Icons 2',   url: '/i02', icon: 'icon' },
        { title: 'Icons 3',   url: '/i03', icon: 'icon' },
        { title: 'Icons 4',   url: '/i04', icon: 'icon' },
        { title: 'Icons 5',   url: '/i05', icon: 'icon' },
        { title: 'Icons 6',   url: '/i06', icon: 'icon' },
        { title: 'Icons 7',   url: '/i07', icon: 'icon' },
        { title: 'Icons 8',   url: '/i08', icon: 'icon' },
        { title: 'Icons 9',   url: '/i09', icon: 'icon' }
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
