import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImperialForm } from  '../../components/imperial-form/imperial-form';
import { MetricForm } from  '../../components/metric-form/metric-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle: string = 'Home';
  methodType: string = 'metric';

  constructor(public navCtrl: NavController) {

  }
}
