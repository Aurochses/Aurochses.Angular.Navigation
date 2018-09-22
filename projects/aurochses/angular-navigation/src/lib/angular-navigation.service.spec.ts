import { TestBed } from '@angular/core/testing';

import { AngularNavigationService } from './angular-navigation.service';

describe('AngularNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularNavigationService = TestBed.get(AngularNavigationService);
    expect(service).toBeTruthy();
  });
});
