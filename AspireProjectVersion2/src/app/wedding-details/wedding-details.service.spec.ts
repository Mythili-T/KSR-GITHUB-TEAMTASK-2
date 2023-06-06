/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeddingDetailsService } from './wedding-details.service';

describe('Service: WeddingDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeddingDetailsService]
    });
  });

  it('should ...', inject([WeddingDetailsService], (service: WeddingDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
