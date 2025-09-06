
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { TransactionType } from '.';
import { ClientWalletTransactionLog, ClientWalletTransactionLog_Builder } from '../clientWalletTransactionLog';


@Injectable({ providedIn: 'root' })
export class TransactionType_ServiceCollection extends ServiceCollection<TransactionType> implements IServiceCollection<TransactionType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfClientWalletTransactionLog(transactionType_id: number, clientWalletTransactionLog: ClientWalletTransactionLog = ClientWalletTransactionLog_Builder.BuildSeekInstance()): Observable<ClientWalletTransactionLog[]> {
    return super.CollectionOf<ClientWalletTransactionLog>(new TransactionType(transactionType_id), clientWalletTransactionLog);
  }

	//#endregion
}
