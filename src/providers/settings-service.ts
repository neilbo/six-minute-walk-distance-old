import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class SettingsService {
  storedMeasurement: any;

  constructor() {
    console.log('Hello SettngsService Provider');
  }

  setMeasurementType(value) {
    this.storedMeasurement = value;
  }

  getMeasurementType() {
    if (_.isEmpty(this.storedMeasurement)) {
      this.storedMeasurement = 'metric';
      return this.storedMeasurement;
    } else {
      return this.storedMeasurement;
    }
  }
  
}
