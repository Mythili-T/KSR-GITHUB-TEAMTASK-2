/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterformService } from './registerform.service';

describe('Service: Registerform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterformService]
    });
  });

  it('should ...', inject([RegisterformService], (service: RegisterformService) => {
    expect(service).toBeTruthy();
  }));
});
