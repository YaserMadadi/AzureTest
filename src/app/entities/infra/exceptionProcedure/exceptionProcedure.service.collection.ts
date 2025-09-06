
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ExceptionProcedure } from '.';


@Injectable({ providedIn: 'root' })
export class ExceptionProcedure_ServiceCollection extends ServiceCollection<ExceptionProcedure> implements IServiceCollection<ExceptionProcedure> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
