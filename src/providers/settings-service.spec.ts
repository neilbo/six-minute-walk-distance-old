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
        it('should assign value to storedMeasurement', inject([SettingsService], (SettingsService) => {
            let value = 'blah';
            SettingsService.setMeasurementType(value);
            expect(SettingsService.storedMeasurement).toBe('blah');
        }));
    });

    describe('getMeasurementType', () => {

        it('should set storedMeasurement to metric if undefined', inject([SettingsService], (SettingsService) => {
            SettingsService.storedMeasurement = undefined;
            SettingsService.getMeasurementType();
            expect(SettingsService.storedMeasurement).toBe('metric');
        }));

        it('should set storedMeasurement to metric if null', inject([SettingsService], (SettingsService) => {
            SettingsService.storedMeasurement = null;
            SettingsService.getMeasurementType();
            expect(SettingsService.storedMeasurement).toBe('metric');
        }));

        it('should set storedMeasurement to metric if empty string', inject([SettingsService], (SettingsService) => {
            SettingsService.storedMeasurement = '';
            SettingsService.getMeasurementType();
            expect(SettingsService.storedMeasurement).toBe('metric');
        }));

        it('should get storedMeasurement that was set', inject([SettingsService], (SettingsService) => {
            SettingsService.storedMeasurement = 'imperial';
            SettingsService.getMeasurementType();
            expect(SettingsService.getMeasurementType()).toBe('imperial');
        }));
    });

});