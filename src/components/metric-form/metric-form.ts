import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from  '../../services/validation-service';
import * as _ from 'lodash';

@Component({
  selector: 'metric-form',
  templateUrl: 'metric-form.html'
})
export class MetricForm {
  metricForm: FormGroup;
  submitAttempt: boolean;

  constructor(public navCtrl: NavController, 
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController) {

      this.metricForm = this.formBuilder.group({
        cm: ['', Validators.required],
        kg: ['', Validators.required],
        ageMetric: ['', [Validators.required, ValidationService.ageValidator]],
        genderMetric: ['', Validators.required]
      });
  }

  calculateMetric(genderMetric) {
    this.submitAttempt = true;

    let form = this.metricForm.value;
    let formEmpty = _.isEmpty(form.cm) ||
    _.isEmpty(form.ageMetric) ||
    _.isEmpty(form.kg) ||
    _.isEmpty(form.genderMetric); 
    
    if (!formEmpty && form.genderMetric == 'male') {
      let maleMetricDistance = this.maleDistance(form.cm, form.kg, form.ageMetric);
      this.formatMetres(maleMetricDistance);
      this.showDistance(this.formatMetres(maleMetricDistance));
    } else if (!formEmpty && form.genderMetric == 'female') {
      let femaleMetricDistance = this.femaleDistance(form.cm, form.kg, form.ageMetric);
      this.formatMetres(femaleMetricDistance);
      this.showDistance(this.formatMetres(femaleMetricDistance));
    }
  }
  /**
   * TODO: Seperate out this into a formulaService to handle Enright and Jenkins Calculations
   * calculateService.enrightFormula(height, weight, age, gender)
   * calculateService.jenkinsFormula(height, weight, age, gender)
   */
  maleDistance(height, weight, age) {
    // Enright
    return ((7.57 * height) - (5.02 * age) - (1.76 * weight) - 309).toFixed(2);
  }

  femaleDistance(height, weight, age) {
    // Enright
    return ((2.11 * height) - (2.29 * weight) - (5.78 * age) + 667).toFixed(2);
  }  

  showDistance(distance) {
    let distanceAlert = this.alertCtrl.create({
      title: distance,
      subTitle: '',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: data => {
          this.resetForm();
        }
      }]
    })
    distanceAlert.present();
  }

  /**
   * TODO: Seperate out this into a converterService to handle Enright and Jenkins Calculations
   * converterService.feetToInches(feet)
   * converterService.cmToInches(inches)
   * converterService.lbsToKg(lbs)
   * converterService.metresToInches(metres)
   */

  feetToInches(feet) {
    return feet * 12;
  }

  cmToInches(inches) {
    return inches * 2.54;
  }

  lbsToKg(lbs) {
    return lbs * 0.453592;
  }

  metresToInches(m) {
    return m * 39.3701;
  }

  formatMetres(m) {
     let distance = m + 'm';
     return distance
  }
  /*
    Reset form after submit?
  */
  resetForm() {
    this.metricForm.reset();
  }
}
