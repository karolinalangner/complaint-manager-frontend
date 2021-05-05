import { TestBed } from '@angular/core/testing';

import { HttpIntercepterAuthServiceService } from './http-intercepter-auth-service.service';

describe('HttpIntercepterAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterAuthServiceService = TestBed.get(HttpIntercepterAuthServiceService);
    expect(service).toBeTruthy();
  });
});
