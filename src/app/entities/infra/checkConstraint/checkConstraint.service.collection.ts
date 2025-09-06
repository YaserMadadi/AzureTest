
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { CheckConstraint } from '.';


@Injectable({ providedIn: 'root' })
export class CheckConstraint_ServiceCollection extends ServiceCollection<CheckConstraint> implements IServiceCollection<CheckConstraint> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
