import { async, TestBed, inject } from '@angular/core/testing';
import { SettingsService } from './settings-service';

describe('SettingsService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
            ],
            providers: [
                SettingsService
            ]
        })
    }));

    describe('setMeasurementType', () => {
        it('should set default measurement type', inject([SettingsService], (SettingsService) => {
            let value = 'blah';
            spyOn(window.localStorage, 'setItem');
            SettingsService.setMeasurementType(value);
            expect(window.localStorage.setItem).toHaveBeenCalledWith('measurementType', value);
        }));
    });

    describe('getMeasurementType', () => {
        
        it('should set measurementType to metric if undefined, null, empty', inject([SettingsService], (SettingsService) => {
            SettingsService.storedMeasurement = undefined;
            SettingsService.getMeasurementType();
            expect(SettingsService.getMeasurementType()).toBe('metric');
        }));

        it('should get measurementType that was set', inject([SettingsService], (SettingsService) => {
            SettingsService.storedMeasurement = 'metric';
            spyOn(window.localStorage, 'getItem').and.returnValue('imperial');
            SettingsService.getMeasurementType();
            expect(window.localStorage.getItem).toHaveBeenCalledWith('measurementType');
            expect(SettingsService.getMeasurementType()).toBe('imperial');
        }));
    });

});