import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormulaService } from '../../providers/formula-service'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, 
              private formulaService: FormulaService) {

  }

  pageTitle: string = 'Settings';
  formula: any;
  
  setFormula() {
    console.log('formula', this.formula);
    this.formulaService.setFormula(this.formula);
  }
  
}
