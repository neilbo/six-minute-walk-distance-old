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
  maleDistance: any;
  
  constructor(public navCtrl: NavController, 
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController) {
      this.metricForm = this.formBuilder.group({
        cm: ['', Validators.required],
        kg: ['', Validators.required],
        ageMetric: ['', AgeValidator.isValid]
      });
  }

  calculateMetric() {
    this.submitAttempt = true;
    //TODO: Add in function for Gender
    // Female = (2.11 x heightcm) - (2.29 x weightkg) - (5.78 x age) + 667 m
    let metric = this.metricForm.value;
    let formEmpty = _.isEmpty(metric.cm) ||
    _.isEmpty(metric.ageMetric) ||
    _.isEmpty(metric.kg); 

    if (!formEmpty) {
      this.maleDistance = ((7.57 * metric.cm) - (5.02 * metric.ageMetric) - (1.76 * metric.kg) - 309).toFixed(2);
      this.showDistance(this.maleDistance);
    }
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
