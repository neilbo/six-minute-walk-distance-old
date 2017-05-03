import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class SettingsService {
  storedMeasurement: any;

  constructor() {
    console.log('Hello SettngsService Provider');
  }

  setMeasurementType(value) {
    console.log('SettngsService:measurementType value', value);
    window.localStorage.setItem('measurementType', value);
  }

  getMeasurementType() {
    if (_.isEmpty(this.storedMeasurement)) {
      return this.storedMeasurement = 'metric';
    } else {
      return this.storedMeasurement = window.localStorage.getItem('measurementType');
    }
  }
  
}
