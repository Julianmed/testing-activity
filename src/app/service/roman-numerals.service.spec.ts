import { TestBed } from '@angular/core/testing';
import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should translate a arabic number in roman number',()=>{
    const romanNumber = service.translateNumberArabic({number: '850'});
    expect(romanNumber).toEqual('DCCLXXVII');
  });
});
