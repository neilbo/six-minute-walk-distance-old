import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  pageTitle: string = 'Settings';
  formula: any;
  measurementType: any;

  constructor(public navCtrl: NavController, 
              private settingService: SettingsService) {
      this.measurementType = this.settingService.getMeasurementType();
  }
  
  setFormula() {
    console.log('formula', this.formula);
    this.settingService.setFormula(this.formula);
  }

  setMeasurementType() {
    console.log('measurementType', this.measurementType);
    this.settingService.setMeasurementType(this.measurementType);
  }
  getMeasurementType() {
    console.log('measurementType', this.measurementType);
    this.measurementType = this.settingService.getMeasurementType();
  }

  ionViewDidLoad() {
    this.getMeasurementType();
  }
}
