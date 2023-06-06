/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewRegisterService } from './New-Register.service';

describe('Service: NewRegister', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewRegisterService]
    });
  });

  it('should ...', inject([NewRegisterService], (service: NewRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
