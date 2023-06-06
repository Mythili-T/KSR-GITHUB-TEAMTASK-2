/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegcredService } from './regcred.service';

describe('Service: Regcred', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegcredService]
    });
  });

  it('should ...', inject([RegcredService], (service: RegcredService) => {
    expect(service).toBeTruthy();
  }));
});
