
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ServiceOrientedWorkTime } from '.';


@Injectable({ providedIn: 'root' })
export class ServiceOrientedWorkTime_ServiceCollection extends ServiceCollection<ServiceOrientedWorkTime> implements IServiceCollection<ServiceOrientedWorkTime> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
