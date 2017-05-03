import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  measurementSystem: any = 'imperial';

  constructor() {
    console.log('Hello SettngsService Provider');
  }

  setMeasurementType(value) {
    this.measurementSystem = value;
  }

  getMeasurementType() {
    console.log('SettingsService.getMeasurementType', this.measurementSystem);
    return this.measurementSystem;

  }

  setFormula(value) {
    console.log('setFormula value', value)
    window.localStorage.setItem('formula', value);
  }

  getFormula() {
    let storedFormula = window.localStorage.getItem('formula');
    console.log('storedFormula', storedFormula);
    return storedFormula;
  }

}
