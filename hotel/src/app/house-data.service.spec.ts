import { TestBed } from '@angular/core/testing';

import { HouseDataService } from './house-data.service';

describe('HouseDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseDataService = TestBed.get(HouseDataService);
    expect(service).toBeTruthy();
  });
});
