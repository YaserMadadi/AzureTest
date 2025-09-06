

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ConnectionType } from '.';


@Injectable({ providedIn: 'root' })
export class ConnectionType_Builder extends ServiceBuilder<ConnectionType> implements IServiceBuilder<ConnectionType> {

  constructor() {
        super();
    }

  
  BuildInstance(): ConnectionType;
  BuildInstance(id: number): ConnectionType;
  BuildInstance(id: number, descriptor: string): ConnectionType;
  BuildInstance(id: number = 0, descriptor: string = ''): ConnectionType {
    return new ConnectionType(id, descriptor);
  }

  BuildSeekInstance(): ConnectionType {
    return ConnectionType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ConnectionType {
    let connectionType = new ConnectionType();
    connectionType.isActive = undefined;
    return connectionType;
  }
}