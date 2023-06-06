/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterValidateService } from './registerValidate.service';

describe('Service: RegisterValidate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterValidateService]
    });
  });

  it('should ...', inject([RegisterValidateService], (service: RegisterValidateService) => {
    expect(service).toBeTruthy();
  }));
});
