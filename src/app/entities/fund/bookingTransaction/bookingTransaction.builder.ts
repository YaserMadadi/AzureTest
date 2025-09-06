

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { BookingTransaction } from '.';


@Injectable({ providedIn: 'root' })
export class BookingTransaction_Builder extends ServiceBuilder<BookingTransaction> implements IServiceBuilder<BookingTransaction> {

  constructor() {
        super();
    }

  
  BuildInstance(): BookingTransaction;
  BuildInstance(id: number): BookingTransaction;
  BuildInstance(id: number, descriptor: string): BookingTransaction;
  BuildInstance(id: number = 0, descriptor: string = ''): BookingTransaction {
    return new BookingTransaction(id, descriptor);
  }

  BuildSeekInstance(): BookingTransaction {
    return BookingTransaction_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): BookingTransaction {
    let bookingTransaction = new BookingTransaction();
    bookingTransaction.booking = undefined;
		bookingTransaction.clientWallet = undefined;
		bookingTransaction.providerWallet = undefined;
		bookingTransaction.date = undefined;
		bookingTransaction.time = undefined;
		bookingTransaction.isActive = undefined;
    return bookingTransaction;
  }
}