/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MobileProductsService } from './mobileProducts.service';

describe('Service: MobileProducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileProductsService]
    });
  });

  it('should ...', inject([MobileProductsService], (service: MobileProductsService) => {
    expect(service).toBeTruthy();
  }));
});
