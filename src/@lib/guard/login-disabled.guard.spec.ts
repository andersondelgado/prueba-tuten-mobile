import { TestBed } from '@angular/core/testing';

import { LoginDisabledGuard } from './login-disabled.guard';

describe('LoginDisabledGuard', () => {
  let guard: LoginDisabledGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginDisabledGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
