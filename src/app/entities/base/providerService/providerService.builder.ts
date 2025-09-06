

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ProviderService } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderService_Builder extends ServiceBuilder<ProviderService> implements IServiceBuilder<ProviderService> {

  constructor() {
        super();
    }

  
  BuildInstance(): ProviderService;
  BuildInstance(id: number): ProviderService;
  BuildInstance(id: number, descriptor: string): ProviderService;
  BuildInstance(id: number = 0, descriptor: string = ''): ProviderService {
    return new ProviderService(id, descriptor);
  }

  BuildSeekInstance(): ProviderService {
    return ProviderService_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ProviderService {
    let providerService = new ProviderService();
    providerService.provider = undefined;
		providerService.serviceType = undefined;
		providerService.isActive = undefined;
    return providerService;
  }
}