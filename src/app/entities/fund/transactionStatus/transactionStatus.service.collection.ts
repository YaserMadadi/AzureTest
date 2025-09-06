
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { TransactionStatus } from '.';
import { ClientWalletTransactionLog, ClientWalletTransactionLog_Builder } from '../clientWalletTransactionLog';
import { ProviderPayOut, ProviderPayOut_Builder } from '../providerPayOut';
import { WalletTopUp, WalletTopUp_Builder } from '../walletTopUp';


@Injectable({ providedIn: 'root' })
export class TransactionStatus_ServiceCollection extends ServiceCollection<TransactionStatus> implements IServiceCollection<TransactionStatus> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfClientWalletTransactionLog(transactionStatus_id: number, clientWalletTransactionLog: ClientWalletTransactionLog = ClientWalletTransactionLog_Builder.BuildSeekInstance()): Observable<ClientWalletTransactionLog[]> {
    return super.CollectionOf<ClientWalletTransactionLog>(new TransactionStatus(transactionStatus_id), clientWalletTransactionLog);
  }

  CollectionOfProviderPayOut(transactionStatus_id: number, providerPayOut: ProviderPayOut = ProviderPayOut_Builder.BuildSeekInstance()): Observable<ProviderPayOut[]> {
    return super.CollectionOf<ProviderPayOut>(new TransactionStatus(transactionStatus_id), providerPayOut);
  }

  CollectionOfWalletTopUp(transactionStatus_id: number, walletTopUp: WalletTopUp = WalletTopUp_Builder.BuildSeekInstance()): Observable<WalletTopUp[]> {
    return super.CollectionOf<WalletTopUp>(new TransactionStatus(transactionStatus_id), walletTopUp);
  }

	//#endregion
}
