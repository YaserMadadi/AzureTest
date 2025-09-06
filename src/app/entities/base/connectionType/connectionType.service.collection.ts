
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ConnectionType } from '.';
import { ProviderConnection, ProviderConnection_Builder } from '../providerConnection';


@Injectable({ providedIn: 'root' })
export class ConnectionType_ServiceCollection extends ServiceCollection<ConnectionType> implements IServiceCollection<ConnectionType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfProviderConnection(connectionType_id: number, providerConnection: ProviderConnection = ProviderConnection_Builder.BuildSeekInstance()): Observable<ProviderConnection[]> {
    return super.CollectionOf<ProviderConnection>(new ConnectionType(connectionType_id), providerConnection);
  }

	//#endregion
}
