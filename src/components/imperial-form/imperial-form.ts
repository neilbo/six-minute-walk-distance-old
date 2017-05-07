import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../../services/validation-service';
import { CalculateService } from '../../providers/calculate-service';
import { ConversionService } from '../../providers/conversion-service';
import * as _ from 'lodash';

@Component({
  selector: 'imperial-form',
  templateUrl: 'imperial-form.html'
})
export class ImperialForm {
  imperialForm: FormGroup;
  submitAttempt: boolean;
  formEmpty: boolean;
  form: any;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public calculate: CalculateService,
    public convert: ConversionService,
    public alertCtrl: AlertController) {
    
    this.imperialForm = this.formBuilder.group({
      feet: ['', ValidationService.feetValidate],
      inches: ['', [ValidationService.inchesRequired, ValidationService.inchesValidate]],
      lbs: ['', ValidationService.lbsRequired],
      ageImperial: ['', [ValidationService.ageRequired, ValidationService.ageValidate]],
      genderImperial: ['', ValidationService.genderRequired]
    });
  }

  calculateImperial(genderImperial) {
    this.submitAttempt = true;
    this.form = this.imperialForm.value;

    this.formEmpty = _.isEmpty(this.form.feet) ||
      _.isEmpty(this.form.inches) ||
      _.isEmpty(this.form.lbs) ||
      _.isEmpty(this.form.genderImperial) ||
      _.isEmpty(this.form.ageImperial);

    console.log('feet', this.form.feet);
    console.log('inches', this.form.inches);
    console.log('gender', this.form.genderImperial);
    console.log('age', this.form.ageImperial);

    let heightInInches = _.toNumber(this.convert.feetToInches(this.form.feet)) + _.toNumber(this.form.inches);
    let heightInCm = this.convert.inchesToCentimetres(heightInInches);
    let weightKgs = this.convert.lbsToKg(this.form.lbs);

    console.log('heightInInches', heightInInches);
    console.log('heightInCm', heightInCm);
    console.log('weightKgs', weightKgs);
    console.log(this.calculate.enrightForumla(heightInCm, weightKgs, this.form.ageImperial, this.form.genderImperial) + 'm');

    let distanceInches = this.convert.metresToInches(this.calculate.enrightForumla(heightInCm, weightKgs, this.form.ageImperial, this.form.genderImperial));
    console.log('distanceInches', distanceInches);
    
    // this.formatDistance(distanceInches);

    if (!this.formEmpty) {
      
      this.showDistance(this.formatDistance(distanceInches));
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

  formatDistance(inches) {
    inches = _.toNumber(inches);
    debugger;
    
    let feet = Math.floor(inches / 12);
    console.log('formatDistance feet: ', feet);
    return feet + 'ft';
  }

  resetForm() {
    this.imperialForm.reset();
  }
}
