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
  imperialForm: FormGroup;
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
        ageMetric: ['', AgeValidator.isValid],
        gender: ['', Validators.required]
      });

      this.imperialForm = this.formBuilder.group({
        feet: ['', Validators.required],
        inches: ['', Validators.required],
        lbs: ['', Validators.required],
        ageImperial: ['', AgeValidator.isValid]
        // gender: ['', Validators.required]
      });
  }

  calculateMetric(gender) {
    this.submitAttempt = true;

    let form = this.metricForm.value;
    let formEmpty = _.isEmpty(form.cm) ||
    _.isEmpty(form.ageMetric) ||
    _.isEmpty(form.kg) ||
    _.isEmpty(gender); 

    if (!formEmpty && gender == 'male') {
      this.showDistance(this.maleDistance(form.cm, form.kg, form.ageMetric));
    } else if (!formEmpty && gender == 'female') {
      this.showDistance(this.femaleDistance(form.cm, form.kg, form.ageMetric));
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

  calculateImperial() {
    this.submitAttempt = true;

    let form = this.imperialForm.value;
    let formEmpty = _.isEmpty(form.feet) ||
    _.isEmpty(form.inches) ||
    _.isEmpty(form.lbs) ||
    _.isEmpty(form.ageImperial);

    let heightInInches = this.feetToInches(form.feet) + form.inches;
    let heightInCm = this.cmToInches(heightInInches);
    let weightKgs = this.lbsToKg(form.lbs);

    console.log('heightInCm', heightInCm);
    console.log('weightKgs', weightKgs);
    console.log(this.maleDistance(heightInCm, weightKgs, form.ageImperial)+'m');

    // male
    // female
    // calculate distance
    // metres to inches.

    console.log('form', form);
    console.log('formEmpty', formEmpty);

  }

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

  formatInches(inches) {
    // format to 5"7
  }
}
