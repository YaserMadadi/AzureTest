
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ClientNotification } from '.';


@Injectable({ providedIn: 'root' })
export class ClientNotification_ServiceCollection extends ServiceCollection<ClientNotification> implements IServiceCollection<ClientNotification> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
