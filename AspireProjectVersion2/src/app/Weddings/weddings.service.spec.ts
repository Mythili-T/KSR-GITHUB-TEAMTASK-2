/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeddingsService } from './weddings.service';

describe('Service: Weddings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeddingsService]
    });
  });

  it('should ...', inject([WeddingsService], (service: WeddingsService) => {
    expect(service).toBeTruthy();
  }));
});
