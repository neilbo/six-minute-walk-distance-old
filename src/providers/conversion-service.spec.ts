import { async, TestBed, inject } from '@angular/core/testing';
import { ConversionService } from './conversion-service';

describe('ConversionService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
            ],
            providers: [
                ConversionService
            ]
        })
    }));

    describe('feetToInches', () => {
        it('should convert feet to inches', inject([ConversionService], (ConversionService) => {
            expect(ConversionService.feetToInches(1)).toBe(12);
        }));
    });

    describe('inchesToCentimetres', () => {
        it('should convert inches to cm', inject([ConversionService], (ConversionService) => {
            expect(ConversionService.inchesToCentimetres(1)).toBe(2.54);
        }));
    });

    describe('lbsToKg', () => {
        it('should convert lbs to kgs', inject([ConversionService], (ConversionService) => {
            expect(ConversionService.lbsToKg(210)).toBe('95.25');
        }));
    });

    describe('metresToInches', () => {
        it('should convert metres to inches', inject([ConversionService], (ConversionService) => {
            expect(ConversionService.metresToInches(1)).toBe('39.37');
        }));
    });

});