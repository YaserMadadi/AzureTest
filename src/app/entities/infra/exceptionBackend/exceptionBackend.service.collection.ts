
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ExceptionBackend } from '.';


@Injectable({ providedIn: 'root' })
export class ExceptionBackend_ServiceCollection extends ServiceCollection<ExceptionBackend> implements IServiceCollection<ExceptionBackend> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
