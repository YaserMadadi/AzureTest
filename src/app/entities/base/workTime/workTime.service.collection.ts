
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { WorkTime } from '.';


@Injectable({ providedIn: 'root' })
export class WorkTime_ServiceCollection extends ServiceCollection<WorkTime> implements IServiceCollection<WorkTime> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
