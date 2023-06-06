/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CaterService } from './cater.service';

describe('Service: Cater', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaterService]
    });
  });

  it('should ...', inject([CaterService], (service: CaterService) => {
    expect(service).toBeTruthy();
  }));
});
