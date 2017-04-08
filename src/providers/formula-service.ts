import { Injectable } from '@angular/core';

@Injectable()
export class FormulaService {

  constructor() {
    console.log('Hello FormulaService Provider');
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
