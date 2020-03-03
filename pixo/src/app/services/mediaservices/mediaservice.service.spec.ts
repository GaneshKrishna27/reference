import { TestBed } from '@angular/core/testing';

import { MediaserviceService } from './mediaservice.service';

describe('MediaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaserviceService = TestBed.get(MediaserviceService);
    expect(service).toBeTruthy();
  });
});
