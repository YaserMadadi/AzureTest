
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ResultMessage } from '.';


@Injectable({ providedIn: 'root' })
export class ResultMessage_ServiceCollection extends ServiceCollection<ResultMessage> implements IServiceCollection<ResultMessage> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
