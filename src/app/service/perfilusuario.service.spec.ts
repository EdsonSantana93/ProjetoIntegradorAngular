import { TestBed } from '@angular/core/testing';

import { PerfilusuarioService } from './perfilusuario.service';

describe('PerfilusuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilusuarioService = TestBed.get(PerfilusuarioService);
    expect(service).toBeTruthy();
  });
});
