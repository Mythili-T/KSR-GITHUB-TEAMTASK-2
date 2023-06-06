import { TestBed } from '@angular/core/testing';

import { ModellingService } from './modelling.service';

describe('ModellingService', () => {
  let service: ModellingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModellingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
