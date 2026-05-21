import { TestBed } from '@angular/core/testing';

import { TessereService } from './tessere.service';

describe('TessereService', () => {
  let service: TessereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TessereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
