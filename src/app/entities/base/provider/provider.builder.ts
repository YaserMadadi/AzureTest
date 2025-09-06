

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Provider } from '.';


@Injectable({ providedIn: 'root' })
export class Provider_Builder extends ServiceBuilder<Provider> implements IServiceBuilder<Provider> {

  constructor() {
        super();
    }

  
  BuildInstance(): Provider;
  BuildInstance(id: number): Provider;
  BuildInstance(id: number, descriptor: string): Provider;
  BuildInstance(id: number = 0, descriptor: string = ''): Provider {
    return new Provider(id, descriptor);
  }

  BuildSeekInstance(): Provider {
    return Provider_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Provider {
    let provider = new Provider();
    provider.providerType = undefined;
		provider.userAccount = undefined;
		provider.isVerified = undefined;
		provider.isActive = undefined;
    return provider;
  }
}