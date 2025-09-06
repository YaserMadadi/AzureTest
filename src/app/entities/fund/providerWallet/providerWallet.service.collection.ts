
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ProviderWallet } from '.';
import { BookingTransaction, BookingTransaction_Builder } from '../bookingTransaction';


@Injectable({ providedIn: 'root' })
export class ProviderWallet_ServiceCollection extends ServiceCollection<ProviderWallet> implements IServiceCollection<ProviderWallet> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfBookingTransaction(providerWallet_id: number, bookingTransaction: BookingTransaction = BookingTransaction_Builder.BuildSeekInstance()): Observable<BookingTransaction[]> {
    return super.CollectionOf<BookingTransaction>(new ProviderWallet(providerWallet_id), bookingTransaction);
  }

	//#endregion
}
