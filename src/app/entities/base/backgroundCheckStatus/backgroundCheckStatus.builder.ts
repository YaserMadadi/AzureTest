

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { BackgroundCheckStatus } from '.';


@Injectable({ providedIn: 'root' })
export class BackgroundCheckStatus_Builder extends ServiceBuilder<BackgroundCheckStatus> implements IServiceBuilder<BackgroundCheckStatus> {

  constructor() {
        super();
    }

  
  BuildInstance(): BackgroundCheckStatus;
  BuildInstance(id: number): BackgroundCheckStatus;
  BuildInstance(id: number, descriptor: string): BackgroundCheckStatus;
  BuildInstance(id: number = 0, descriptor: string = ''): BackgroundCheckStatus {
    return new BackgroundCheckStatus(id, descriptor);
  }

  BuildSeekInstance(): BackgroundCheckStatus {
    return BackgroundCheckStatus_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): BackgroundCheckStatus {
    let backgroundCheckStatus = new BackgroundCheckStatus();
    backgroundCheckStatus.isActive = undefined;
    return backgroundCheckStatus;
  }
}