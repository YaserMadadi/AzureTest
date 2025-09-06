

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { WalletTopUp } from '.';


@Injectable({ providedIn: 'root' })
export class WalletTopUp_Builder extends ServiceBuilder<WalletTopUp> implements IServiceBuilder<WalletTopUp> {

  constructor() {
        super();
    }

  
  BuildInstance(): WalletTopUp;
  BuildInstance(id: number): WalletTopUp;
  BuildInstance(id: number, descriptor: string): WalletTopUp;
  BuildInstance(id: number = 0, descriptor: string = ''): WalletTopUp {
    return new WalletTopUp(id, descriptor);
  }

  BuildSeekInstance(): WalletTopUp {
    return WalletTopUp_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): WalletTopUp {
    let walletTopUp = new WalletTopUp();
    walletTopUp.clientWallet = undefined;
		walletTopUp.date = undefined;
		walletTopUp.time = undefined;
		walletTopUp.paymentMethod = undefined;
		walletTopUp.transactionStatus = undefined;
		walletTopUp.isActive = undefined;
    return walletTopUp;
  }
}