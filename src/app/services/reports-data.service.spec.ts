import { TestBed } from '@angular/core/testing';

import { ReportsDataService } from './reports-data.service';

describe('ReportsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportsDataService = TestBed.get(ReportsDataService);
    expect(service).toBeTruthy();
  });
});
