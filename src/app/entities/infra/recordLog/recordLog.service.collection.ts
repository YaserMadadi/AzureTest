
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { RecordLog } from '.';


@Injectable({ providedIn: 'root' })
export class RecordLog_ServiceCollection extends ServiceCollection<RecordLog> implements IServiceCollection<RecordLog> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
