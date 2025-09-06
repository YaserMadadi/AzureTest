

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ClientWalletTransactionLog } from '.';


@Injectable({ providedIn: 'root' })
export class ClientWalletTransactionLog_Builder extends ServiceBuilder<ClientWalletTransactionLog> implements IServiceBuilder<ClientWalletTransactionLog> {

  constructor() {
        super();
    }

  
  BuildInstance(): ClientWalletTransactionLog;
  BuildInstance(id: number): ClientWalletTransactionLog;
  BuildInstance(id: number, descriptor: string): ClientWalletTransactionLog;
  BuildInstance(id: number = 0, descriptor: string = ''): ClientWalletTransactionLog {
    return new ClientWalletTransactionLog(id, descriptor);
  }

  BuildSeekInstance(): ClientWalletTransactionLog {
    return ClientWalletTransactionLog_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ClientWalletTransactionLog {
    let clientWalletTransactionLog = new ClientWalletTransactionLog();
    clientWalletTransactionLog.clientWallet = undefined;
		clientWalletTransactionLog.transactionType = undefined;
		clientWalletTransactionLog.date = undefined;
		clientWalletTransactionLog.time = undefined;
		clientWalletTransactionLog.transactionStatus = undefined;
		clientWalletTransactionLog.isActive = undefined;
    return clientWalletTransactionLog;
  }
}