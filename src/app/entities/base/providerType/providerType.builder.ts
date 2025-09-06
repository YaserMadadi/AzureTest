

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ProviderType } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderType_Builder extends ServiceBuilder<ProviderType> implements IServiceBuilder<ProviderType> {

  constructor() {
        super();
    }

  
  BuildInstance(): ProviderType;
  BuildInstance(id: number): ProviderType;
  BuildInstance(id: number, descriptor: string): ProviderType;
  BuildInstance(id: number = 0, descriptor: string = ''): ProviderType {
    return new ProviderType(id, descriptor);
  }

  BuildSeekInstance(): ProviderType {
    return ProviderType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ProviderType {
    let providerType = new ProviderType();
    providerType.isActive = undefined;
    return providerType;
  }
}