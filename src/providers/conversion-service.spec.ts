import { async, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from "ionic-angular/index";
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
            expect(ConversionService.feetToInches(5)).toBe(60);
        }));
    });

    describe('cmToInches', () => {
        it('should convert cm to inches', inject([ConversionService], (ConversionService) => {
            expect(ConversionService.cmToInches(3)).toBe(7.62);
        }));
    });

    describe('lbsToKg', () => {
        it('should convert lbs to kgs', inject([ConversionService], (ConversionService) => {
            expect(ConversionService.lbsToKg(210)).toBe('95.25');
        }));
    });

    describe('metresToInches', () => {
        it('should convert metres to inches', inject([ConversionService], (ConversionService) => {
            expect(ConversionService.metresToInches(10)).toBe('393.70');
        }));
    });

});