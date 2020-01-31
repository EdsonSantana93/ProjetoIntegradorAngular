import { TestBed } from '@angular/core/testing';

import { FaleconoscoService } from './faleconosco.service';

describe('FaleconoscoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaleconoscoService = TestBed.get(FaleconoscoService);
    expect(service).toBeTruthy();
  });
});
