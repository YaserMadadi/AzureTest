

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ClientNotification } from '.';


@Injectable({ providedIn: 'root' })
export class ClientNotification_Builder extends ServiceBuilder<ClientNotification> implements IServiceBuilder<ClientNotification> {

  constructor() {
        super();
    }

  
  BuildInstance(): ClientNotification;
  BuildInstance(id: number): ClientNotification;
  BuildInstance(id: number, descriptor: string): ClientNotification;
  BuildInstance(id: number = 0, descriptor: string = ''): ClientNotification {
    return new ClientNotification(id, descriptor);
  }

  BuildSeekInstance(): ClientNotification {
    return ClientNotification_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ClientNotification {
    let clientNotification = new ClientNotification();
    clientNotification.client = undefined;
		clientNotification.sentTime = undefined;
		clientNotification.notificationType = undefined;
		clientNotification.isRead = undefined;
		clientNotification.readTime = undefined;
		clientNotification.isActive = undefined;
    return clientNotification;
  }
}