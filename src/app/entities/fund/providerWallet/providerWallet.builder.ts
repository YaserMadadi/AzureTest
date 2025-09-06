

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ProviderWallet } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderWallet_Builder extends ServiceBuilder<ProviderWallet> implements IServiceBuilder<ProviderWallet> {

  constructor() {
        super();
    }

  
  BuildInstance(): ProviderWallet;
  BuildInstance(id: number): ProviderWallet;
  BuildInstance(id: number, descriptor: string): ProviderWallet;
  BuildInstance(id: number = 0, descriptor: string = ''): ProviderWallet {
    return new ProviderWallet(id, descriptor);
  }

  BuildSeekInstance(): ProviderWallet {
    return ProviderWallet_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ProviderWallet {
    let providerWallet = new ProviderWallet();
    providerWallet.provider = undefined;
    return providerWallet;
  }
}