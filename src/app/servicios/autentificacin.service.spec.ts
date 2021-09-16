import { TestBed } from '@angular/core/testing';

import { AutentificacinService } from './autentificacin.service';

describe('AutentificacinService', () => {
  let service: AutentificacinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutentificacinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
