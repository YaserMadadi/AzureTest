

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ProviderPayOut } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderPayOut_Builder extends ServiceBuilder<ProviderPayOut> implements IServiceBuilder<ProviderPayOut> {

  constructor() {
        super();
    }

  
  BuildInstance(): ProviderPayOut;
  BuildInstance(id: number): ProviderPayOut;
  BuildInstance(id: number, descriptor: string): ProviderPayOut;
  BuildInstance(id: number = 0, descriptor: string = ''): ProviderPayOut {
    return new ProviderPayOut(id, descriptor);
  }

  BuildSeekInstance(): ProviderPayOut {
    return ProviderPayOut_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ProviderPayOut {
    let providerPayOut = new ProviderPayOut();
    providerPayOut.provider = undefined;
		providerPayOut.date = undefined;
		providerPayOut.time = undefined;
		providerPayOut.transactionStatus = undefined;
    return providerPayOut;
  }
}