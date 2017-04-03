import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  pageTitle: string = 'Settings';
  formula: any
  
  logSelected() {
    console.log('formula', this.formula);
    //TODO: send value to formula service that sets this.
    // import ForumulaSerivce,
    // call formulaServce.setFormula(value),
    // in home.ts call formulaServce.getFormula(),
  }
  
}
