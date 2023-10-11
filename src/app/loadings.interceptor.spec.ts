import { TestBed } from '@angular/core/testing';

import { LoadingsInterceptor } from './loadings.interceptor';

describe('LoadingsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingsInterceptor = TestBed.inject(LoadingsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
