import { TestBed } from '@angular/core/testing';

import { SediStateService } from './sedi-state.service';

describe('SediStateService', () => {
  let service: SediStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SediStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
