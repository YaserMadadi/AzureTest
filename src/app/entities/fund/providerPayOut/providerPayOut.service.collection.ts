
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ProviderPayOut } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderPayOut_ServiceCollection extends ServiceCollection<ProviderPayOut> implements IServiceCollection<ProviderPayOut> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
