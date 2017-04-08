import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle: string = '6MWD';
  methodType: string = 'metric';

  constructor(public navCtrl: NavController) {

  }
}
