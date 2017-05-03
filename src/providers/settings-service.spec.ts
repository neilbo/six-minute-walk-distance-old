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

    xdescribe('setMeasurementType', () => {
        it('should set default measurement type', inject([SettingsService], (SettingsService) => {
        }));
    });

    xdescribe('getMeasurementType', () => {
        it('should set measurementType to metric if undefined, null, empty', inject([SettingsService], (SettingsService) => {
        }));
        it('should get measurementType that was set', inject([SettingsService], (SettingsService) => {
        }));
    });

});