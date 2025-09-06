
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { RoleMember } from '.';


@Injectable({ providedIn: 'root' })
export class RoleMember_ServiceCollection extends ServiceCollection<RoleMember> implements IServiceCollection<RoleMember> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
