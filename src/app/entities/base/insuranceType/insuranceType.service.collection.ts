
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { InsuranceType } from '.';


@Injectable({ providedIn: 'root' })
export class InsuranceType_ServiceCollection extends ServiceCollection<InsuranceType> implements IServiceCollection<InsuranceType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
