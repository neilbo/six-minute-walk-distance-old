import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  pageTitle: string = 'Settings';

  items: any = [
    'Formula'
  ];

   itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
