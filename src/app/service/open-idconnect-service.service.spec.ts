import { TestBed } from '@angular/core/testing';

import { OpenIDConnectServiceService } from './open-idconnect-service.service';

describe('OpenIDConnectServiceService', () => {
  let service: OpenIDConnectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenIDConnectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
