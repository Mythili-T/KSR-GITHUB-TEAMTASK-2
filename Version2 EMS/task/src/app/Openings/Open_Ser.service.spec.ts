/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Open_SerService } from './Open_Ser.service';

describe('Service: Open_Ser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Open_SerService]
    });
  });

  it('should ...', inject([Open_SerService], (service: Open_SerService) => {
    expect(service).toBeTruthy();
  }));
});
