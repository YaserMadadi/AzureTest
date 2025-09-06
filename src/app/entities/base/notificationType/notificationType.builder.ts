

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { NotificationType } from '.';


@Injectable({ providedIn: 'root' })
export class NotificationType_Builder extends ServiceBuilder<NotificationType> implements IServiceBuilder<NotificationType> {

  constructor() {
        super();
    }

  
  BuildInstance(): NotificationType;
  BuildInstance(id: number): NotificationType;
  BuildInstance(id: number, descriptor: string): NotificationType;
  BuildInstance(id: number = 0, descriptor: string = ''): NotificationType {
    return new NotificationType(id, descriptor);
  }

  BuildSeekInstance(): NotificationType {
    return NotificationType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): NotificationType {
    let notificationType = new NotificationType();
    notificationType.isActive = undefined;
    return notificationType;
  }
}