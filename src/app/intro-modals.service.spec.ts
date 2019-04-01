import { TestBed } from '@angular/core/testing';

import { IntroModalsService } from './intro-modals.service';

describe('IntroModalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntroModalsService = TestBed.get(IntroModalsService);
    expect(service).toBeTruthy();
  });
});
