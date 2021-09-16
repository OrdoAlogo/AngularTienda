import { TestBed } from '@angular/core/testing';

import { CanactivatedloginService } from './canactivatedlogin.service';

describe('CanactivatedloginService', () => {
  let service: CanactivatedloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivatedloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
