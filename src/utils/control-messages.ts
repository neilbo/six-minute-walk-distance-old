import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../services/validation-service';

@Component({
  selector: 'control-messages',
  template: `<ion-item  *ngIf="errorMessage !== null">
              <span class="form-error">{{errorMessage}}</span>
            </ion-item>`

})
export class ControlMessages {
  @Input() control: FormControl;

  
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      console.log('this.control', this.control);
      console.log('tpropertyName', propertyName);
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.control);
      }
    }
    return null;
  }
}