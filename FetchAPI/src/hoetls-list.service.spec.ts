import { TestBed } from '@angular/core/testing';

import { HoetlsListService } from './hoetls-list.service';

describe('HoetlsListService', () => {
  let service: HoetlsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoetlsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
