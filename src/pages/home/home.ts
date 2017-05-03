import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle: string = '6MWD';
  methodType: any;

  constructor(public navCtrl: NavController,
              public settingsService: SettingsService) {
      this.methodType = this.settingsService.getMeasurementType();
  }

  getMeasurementType() {
    console.log('home', this.methodType );
    this.methodType = this.settingsService.getMeasurementType();
  }
  ionViewDidLoad() {
    this.getMeasurementType();
  }
  ionViewWillEnter() {
    this.getMeasurementType();
  }
}
