/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddEmpService } from './AddEmp.service';

describe('Service: AddEmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEmpService]
    });
  });

  it('should ...', inject([AddEmpService], (service: AddEmpService) => {
    expect(service).toBeTruthy();
  }));
});
