
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { RolePermission } from '.';


@Injectable({ providedIn: 'root' })
export class RolePermission_ServiceCollection extends ServiceCollection<RolePermission> implements IServiceCollection<RolePermission> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
