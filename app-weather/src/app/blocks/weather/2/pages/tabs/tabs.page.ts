import { Component } from '@angular/core';

import { AboutPage } from '../about/about.page';
import { HomePage } from '../home/home.page';
import { SettingsPage } from '../settings/settings.page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
