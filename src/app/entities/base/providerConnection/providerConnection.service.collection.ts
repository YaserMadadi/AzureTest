
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ProviderConnection } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderConnection_ServiceCollection extends ServiceCollection<ProviderConnection> implements IServiceCollection<ProviderConnection> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
