import { TestBed } from '@angular/core/testing';

import { UserManagementServiceService } from './user-management-service.service';

describe('UserManagementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserManagementServiceService = TestBed.get(UserManagementServiceService);
    expect(service).toBeTruthy();
  });
});
