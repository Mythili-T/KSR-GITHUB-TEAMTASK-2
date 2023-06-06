import { TestBed } from '@angular/core/testing';

import { HeaderGuard } from './header.guard';

describe('HeaderGuard', () => {
  let guard: HeaderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeaderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
