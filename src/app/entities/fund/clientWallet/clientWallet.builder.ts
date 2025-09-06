

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ClientWallet } from '.';


@Injectable({ providedIn: 'root' })
export class ClientWallet_Builder extends ServiceBuilder<ClientWallet> implements IServiceBuilder<ClientWallet> {

  constructor() {
        super();
    }

  
  BuildInstance(): ClientWallet;
  BuildInstance(id: number): ClientWallet;
  BuildInstance(id: number, descriptor: string): ClientWallet;
  BuildInstance(id: number = 0, descriptor: string = ''): ClientWallet {
    return new ClientWallet(id, descriptor);
  }

  BuildSeekInstance(): ClientWallet {
    return ClientWallet_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ClientWallet {
    let clientWallet = new ClientWallet();
    clientWallet.client = undefined;
		clientWallet.isActive = undefined;
    return clientWallet;
  }
}