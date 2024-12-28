import { TestBed } from '@angular/core/testing';

import { FreeLightboxService } from './free-lightbox.service';

describe('FreeLightboxService', () => {
  let service: FreeLightboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeLightboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
