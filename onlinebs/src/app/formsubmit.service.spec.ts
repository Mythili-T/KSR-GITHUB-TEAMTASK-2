import { TestBed } from '@angular/core/testing';

import { FormsubmitService } from './formsubmit.service';

describe('FormsubmitService', () => {
  let service: FormsubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
