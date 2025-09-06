
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { StaffPermission } from '.';


@Injectable({ providedIn: 'root' })
export class StaffPermission_ServiceCollection extends ServiceCollection<StaffPermission> implements IServiceCollection<StaffPermission> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
