

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ServiceOrientedWorkTime } from '.';


@Injectable({ providedIn: 'root' })
export class ServiceOrientedWorkTime_Builder extends ServiceBuilder<ServiceOrientedWorkTime> implements IServiceBuilder<ServiceOrientedWorkTime> {

  constructor() {
        super();
    }

  
  BuildInstance(): ServiceOrientedWorkTime;
  BuildInstance(id: number): ServiceOrientedWorkTime;
  BuildInstance(id: number, descriptor: string): ServiceOrientedWorkTime;
  BuildInstance(id: number = 0, descriptor: string = ''): ServiceOrientedWorkTime {
    return new ServiceOrientedWorkTime(id, descriptor);
  }

  BuildSeekInstance(): ServiceOrientedWorkTime {
    return ServiceOrientedWorkTime_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ServiceOrientedWorkTime {
    let serviceOrientedWorkTime = new ServiceOrientedWorkTime();
    serviceOrientedWorkTime.providerService = undefined;
		serviceOrientedWorkTime.weekDay = undefined;
		serviceOrientedWorkTime.from = undefined;
		serviceOrientedWorkTime.to = undefined;
		serviceOrientedWorkTime.isActive = undefined;
    return serviceOrientedWorkTime;
  }
}