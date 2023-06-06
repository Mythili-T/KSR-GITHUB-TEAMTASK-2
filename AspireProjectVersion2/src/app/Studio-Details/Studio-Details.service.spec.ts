/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudioDetailsService } from './Studio-Details.service';

describe('Service: StudioDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudioDetailsService]
    });
  });

  it('should ...', inject([StudioDetailsService], (service: StudioDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
