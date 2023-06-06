/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegserviceServiceService } from './RegserviceService.service';

describe('Service: RegserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegserviceServiceService]
    });
  });

  it('should ...', inject([RegserviceServiceService], (service: RegserviceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
