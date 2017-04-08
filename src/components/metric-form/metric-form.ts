import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/validation-service';
import { CalculateService } from '../../providers/calculate-service';
import * as _ from 'lodash';

@Component({
  selector: 'metric-form',
  templateUrl: 'metric-form.html'
})
export class MetricForm {
  metricForm: FormGroup;
  submitAttempt: boolean;
  formEmpty: boolean;
  form: any;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public calculate: CalculateService,
    public alertCtrl: AlertController) {
    
    this.metricForm = this.formBuilder.group({
      cm: ['', ValidationService.cmRequired],
      kg: ['', ValidationService.kgRequired],
      ageMetric: ['', [ValidationService.ageRequired, ValidationService.ageValidate]],
      genderMetric: ['', ValidationService.genderRequired]
    });
  }

  calculateMetric(genderMetric) {
    this.submitAttempt = true;
    this.form = this.metricForm.value;

    this.formEmpty = _.isEmpty(this.form.cm) ||
      _.isEmpty(this.form.ageMetric) ||
      _.isEmpty(this.form.kg) ||
      _.isEmpty(this.form.genderMetric);

    if (!this.formEmpty) {
      let metricDistance = this.calculate.enrightForumla(this.form.cm, this.form.kg, this.form.ageMetric, this.form.genderMetric);
      this.showDistance(this.formatDistance(metricDistance));
    } else {
      this.showError('Error', `Check that all fields <br />have been filled in.`);
    }
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

  showError(title, errorMessage) {
    let emptyForm = this.alertCtrl.create({
      title: title,
      subTitle: errorMessage,
      buttons: [{
        text: 'OK',
      }]
    })
    emptyForm.present();
  }

  formatDistance(metres) {
    return metres + 'm';
  }

  resetForm() {
    this.metricForm.reset();
  }
}
