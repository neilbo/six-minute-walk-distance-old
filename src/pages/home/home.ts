import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle: string = '6MWD';
  measurementType: any;

  constructor(public navCtrl: NavController,
              public settingsService: SettingsService) {
  }

  getMeasurementType() {
    this.measurementType = this.settingsService.getMeasurementType();
  }
  ionViewDidLoad() {
    this.getMeasurementType();
  }
  ionViewWillEnter() {
    this.getMeasurementType();
  }
}
