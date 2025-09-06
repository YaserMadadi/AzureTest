
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Staff } from '.';
import { StaffPermission, StaffPermission_Builder } from '../staffPermission';


@Injectable({ providedIn: 'root' })
export class Staff_ServiceCollection extends ServiceCollection<Staff> implements IServiceCollection<Staff> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfStaffPermission(staff_id: number, staffPermission: StaffPermission = StaffPermission_Builder.BuildSeekInstance()): Observable<StaffPermission[]> {
    return super.CollectionOf<StaffPermission>(new Staff(staff_id), staffPermission);
  }

	//#endregion
}
