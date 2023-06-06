/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterpageService } from './registerpage.service';

describe('Service: Registerpage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterpageService]
    });
  });

  it('should ...', inject([RegisterpageService], (service: RegisterpageService) => {
    expect(service).toBeTruthy();
  }));
});
