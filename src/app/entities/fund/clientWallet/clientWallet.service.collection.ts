
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ClientWallet } from '.';
import { BookingTransaction, BookingTransaction_Builder } from '../bookingTransaction';
import { ClientWalletTransactionLog, ClientWalletTransactionLog_Builder } from '../clientWalletTransactionLog';
import { WalletTopUp, WalletTopUp_Builder } from '../walletTopUp';


@Injectable({ providedIn: 'root' })
export class ClientWallet_ServiceCollection extends ServiceCollection<ClientWallet> implements IServiceCollection<ClientWallet> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfBookingTransaction(clientWallet_id: number, bookingTransaction: BookingTransaction = BookingTransaction_Builder.BuildSeekInstance()): Observable<BookingTransaction[]> {
    return super.CollectionOf<BookingTransaction>(new ClientWallet(clientWallet_id), bookingTransaction);
  }

  CollectionOfClientWalletTransactionLog(clientWallet_id: number, clientWalletTransactionLog: ClientWalletTransactionLog = ClientWalletTransactionLog_Builder.BuildSeekInstance()): Observable<ClientWalletTransactionLog[]> {
    return super.CollectionOf<ClientWalletTransactionLog>(new ClientWallet(clientWallet_id), clientWalletTransactionLog);
  }

  CollectionOfWalletTopUp(clientWallet_id: number, walletTopUp: WalletTopUp = WalletTopUp_Builder.BuildSeekInstance()): Observable<WalletTopUp[]> {
    return super.CollectionOf<WalletTopUp>(new ClientWallet(clientWallet_id), walletTopUp);
  }

	//#endregion
}
