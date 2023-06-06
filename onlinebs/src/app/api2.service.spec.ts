/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Api2Service } from './api2.service';

describe('Service: Api2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Api2Service]
    });
  });

  it('should ...', inject([Api2Service], (service: Api2Service) => {
    expect(service).toBeTruthy();
  }));
});
