

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ServiceType } from '.';


@Injectable({ providedIn: 'root' })
export class ServiceType_Builder extends ServiceBuilder<ServiceType> implements IServiceBuilder<ServiceType> {

  constructor() {
        super();
    }

  
  BuildInstance(): ServiceType;
  BuildInstance(id: number): ServiceType;
  BuildInstance(id: number, descriptor: string): ServiceType;
  BuildInstance(id: number = 0, descriptor: string = ''): ServiceType {
    return new ServiceType(id, descriptor);
  }

  BuildSeekInstance(): ServiceType {
    return ServiceType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ServiceType {
    let serviceType = new ServiceType();
    serviceType.isActive = undefined;
    return serviceType;
  }
}