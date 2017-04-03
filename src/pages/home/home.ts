import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from  '../../services/validation-service';
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
        ageMetric: ['', [Validators.required, ValidationService.ageValidator]],
        genderMetric: ['', Validators.required]
      });

      this.imperialForm = this.formBuilder.group({
        feet: ['', Validators.required],
        inches: ['', Validators.required],
        lbs: ['', Validators.required],
        ageImperial: ['', [Validators.required, ValidationService.ageValidator]],
        genderImperial: ['', Validators.required]
      });
  }


  calculateMetric(genderMetric) {
    this.submitAttempt = true;

    let form = this.metricForm.value;
    let formEmpty = _.isEmpty(form.cm) ||
    _.isEmpty(form.ageMetric) ||
    _.isEmpty(form.kg) ||
    _.isEmpty(genderMetric); 

    if (!formEmpty && genderMetric == 'male') {
      let maleMetricDistance = this.maleDistance(form.cm, form.kg, form.ageMetric);
      this.formatMetres(maleMetricDistance);
      this.showDistance(this.formatMetres(maleMetricDistance));
    } else if (!formEmpty && genderMetric == 'female') {
      let femaleMetricDistance = this.femaleDistance(form.cm, form.kg, form.ageMetric);
      this.formatMetres(femaleMetricDistance);
      this.showDistance(this.formatMetres(femaleMetricDistance));
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
      title: distance,
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

  calculateImperial(genderImperial) {
    debugger;
    this.submitAttempt = true;

    let form = this.imperialForm.value;
    let formEmpty = _.isEmpty(form.feet) ||
    _.isEmpty(form.inches) ||
    _.isEmpty(form.lbs) ||
    _.isEmpty(form.genderImperial) ||
    _.isEmpty(form.ageImperial);

    let heightInInches = _.toNumber(this.feetToInches(form.feet)) + _.toNumber(form.inches);
    let heightInCm = this.cmToInches(heightInInches);
    let weightKgs = this.lbsToKg(form.lbs);

    console.log(this.maleDistance(heightInCm, weightKgs, form.ageImperial)+'m');

    let distanceInches = this.metresToInches(this.maleDistance(heightInCm, weightKgs, form.ageImperial));
    this.formatInches(distanceInches);
    
     if (!formEmpty && genderImperial == 'male') {
      let distanceInchesMale = this.metresToInches(this.maleDistance(heightInCm, weightKgs, form.ageImperial));
      this.showDistance(this.formatInches(distanceInches));
    } else if (!formEmpty && genderImperial == 'female') {
      let distanceInchesFemale = this.metresToInches(this.femaleDistance(heightInCm, weightKgs, form.ageImperial));
      this.showDistance(this.formatInches(distanceInchesFemale));
    }

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
     let feet = Math.floor(inches / 12);
     inches %= 12;
     let distance = feet + 'ft ' + inches.toFixed(2) + 'in';
     return distance
  }
  formatMetres(m) {
     let distance = m + 'm';
     return distance
  }
}
