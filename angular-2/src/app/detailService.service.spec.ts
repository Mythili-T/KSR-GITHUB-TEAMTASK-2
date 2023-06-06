/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailServiceService } from './detailService.service';

describe('Service: DetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailServiceService]
    });
  });

  it('should ...', inject([DetailServiceService], (service: DetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
