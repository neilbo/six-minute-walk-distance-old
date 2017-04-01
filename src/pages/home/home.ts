import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AgeValidator } from  '../../validators/age-validator';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  metricForm: FormGroup;
  pageTitle: string = 'Home';
  methodType: string = 'metric';
  submitAttempt: boolean;
  genderRequiredError: boolean;

  constructor(public navCtrl: NavController, 
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController) {
      this.metricForm = this.formBuilder.group({
        cm: ['', Validators.required],
        kg: ['', Validators.required],
        age: ['', AgeValidator.isValid],
        gender: ['', Validators.required]
      });
  }

  calculateMetric(gender) {
    this.submitAttempt = true;

    let form = this.metricForm.value;
    let formEmpty = _.isEmpty(form.cm) ||
    _.isEmpty(form.age) ||
    _.isEmpty(form.kg) ||
    _.isEmpty(gender); 

    if (!formEmpty && gender == 'male') {
      this.showDistance(this.maleDistance(form.cm, form.kg, form.age));
    } else if (!formEmpty && gender == 'female') {
      this.showDistance(this.femaleDistance(form.cm, form.kg, form.age));
    }
  }
  
  maleDistance(height, weight, age) {
    // Enright
    return ((7.57 * height) - (5.02 * age) - (1.76 * weight) - 309).toFixed(2);
  }

  femaleDistance(height, weight, age) {
    // Enright
    return ((2.11 * height) - (2.29 * weight) - (5.78 * age) + 667).toFixed(2);
  }  

  showDistance(distance) {
    let alert = this.alertCtrl.create({
      title: distance + 'm',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

}
