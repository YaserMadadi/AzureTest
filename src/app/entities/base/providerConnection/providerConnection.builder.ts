

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ProviderConnection } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderConnection_Builder extends ServiceBuilder<ProviderConnection> implements IServiceBuilder<ProviderConnection> {

  constructor() {
        super();
    }

  
  BuildInstance(): ProviderConnection;
  BuildInstance(id: number): ProviderConnection;
  BuildInstance(id: number, descriptor: string): ProviderConnection;
  BuildInstance(id: number = 0, descriptor: string = ''): ProviderConnection {
    return new ProviderConnection(id, descriptor);
  }

  BuildSeekInstance(): ProviderConnection {
    return ProviderConnection_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ProviderConnection {
    let providerConnection = new ProviderConnection();
    providerConnection.provider = undefined;
		providerConnection.connectionType = undefined;
		providerConnection.isActive = undefined;
    return providerConnection;
  }
}