import { FormControl } from '@angular/forms';
import * as _ from 'lodash';
 
export class AgeValidator {
 
    static isValid(control: FormControl): any {

        if (_.isEmpty(control.value)) {
            return {
                "age is required": true
            };
        }
        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
 
        if(control.value % 1 !== 0){
            return {
                "not a whole number": true
            };
        }
 
        if(control.value < 18){
            return {
                "too young": true
            };
        }
 
        if (control.value > 120){
            return {
                "not realistic": true
            };
        }
 
        return null;
    }
 
}