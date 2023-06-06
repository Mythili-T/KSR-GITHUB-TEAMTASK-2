/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpDbService } from './httpDb.service';

describe('Service: HttpDb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpDbService]
    });
  });

  it('should ...', inject([HttpDbService], (service: HttpDbService) => {
    expect(service).toBeTruthy();
  }));
});
