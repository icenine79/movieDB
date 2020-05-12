import { TestBed } from '@angular/core/testing';

import { AdminGuardService } from './admin-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule, RouterTestingModule],
    providers:[AdminGuardService]
  }));

  it('should be created', () => {
    const service: AdminGuardService = TestBed.get(AdminGuardService);
    expect(service).toBeTruthy();
  });
});
