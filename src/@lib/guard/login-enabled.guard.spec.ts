import { TestBed } from '@angular/core/testing';

import { LoginEnabledGuard } from './login-enabled.guard';

describe('LoginEnabledGuard', () => {
  let guard: LoginEnabledGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginEnabledGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
