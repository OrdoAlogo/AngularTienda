import { TestBed } from '@angular/core/testing';

import { GeneradorfrutasService } from './generadorfrutas.service';

describe('GeneradorfrutasService', () => {
  let service: GeneradorfrutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorfrutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
