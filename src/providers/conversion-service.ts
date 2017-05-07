import { Injectable } from '@angular/core';

@Injectable()
export class ConversionService {

  constructor() {
    console.log('Hello ConversionService Provider');
  }

  feetToInches(feet) {
    return feet * 12;
  }

  cmToInches(cm) {
    return cm * 0.39370;
  }

  inchesToCentimetres(inches) {
    return inches * 2.54;
  }

  lbsToKg(lbs) {
    return (lbs * 0.453592).toFixed(2);
  }

  metresToInches(m) {
    return (m * 39.3701).toFixed(2);
  }

}
