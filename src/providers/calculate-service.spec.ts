import { async, TestBed, inject } from '@angular/core/testing';
import { CalculateService } from './calculate-service';

describe('CalculateService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
            ],
            providers: [
                CalculateService
            ]
        })
    }));

    describe('maleEnright', () => {
        it('should calcuate male enright formula', inject([CalculateService], (CalculateService) => {
            let height = 180;
            let weight = 80;
            let age = 80;
            expect(CalculateService.maleEnright(height, weight, age)).toBe('511.20');
        }));
    });

    describe('femaleEnright', () => {
        it('should calculate female enright formula', inject([CalculateService], (CalculateService) => {
            let height = 180;
            let weight = 80;
            let age = 80;
            expect(CalculateService.femaleEnright(height, weight, age)).toBe('401.20');
        }));
    });

    describe('enrightForumla', () => {
        it('should calculate enright formula for male', inject([CalculateService], (CalculateService) => {
            let height = 180;
            let weight = 80;
            let age = 80;
            let gender = 'male';
            expect(CalculateService.enrightForumla(height, weight, age, gender)).toBe(CalculateService.maleEnright(height, weight, age));
        }));

        it('should calculate enright formula for female', inject([CalculateService], (CalculateService) => {
            let height = 180;
            let weight = 80;
            let age = 80;
            let gender = 'female';
            expect(CalculateService.enrightForumla(height, weight, age, gender)).toBe(CalculateService.femaleEnright(height, weight, age));
        }));
    });

    
});