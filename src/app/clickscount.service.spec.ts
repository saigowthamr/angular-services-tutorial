import { TestBed } from '@angular/core/testing';

import { ClickscountService } from './clickscount.service';

describe('ClickscountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClickscountService = TestBed.get(ClickscountService);
    expect(service).toBeTruthy();
  });
});
