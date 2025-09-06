

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { BookingTransaction, BookingTransaction_Builder } from '.';

import { Booking_Service } from '../../base/booking';
import { ClientWallet_Service } from '../clientWallet';
import { ProviderWallet_Service } from '../providerWallet';


@Injectable({ providedIn: 'root' })
export class BookingTransaction_Service extends Service<BookingTransaction> implements IService<BookingTransaction> {

  constructor() {
    super(BookingTransaction.Info, inject(BookingTransaction_Builder));
  }

  //#region Related Services
  
  public bookingService: Booking_Service = inject(Booking_Service);

	public clientWalletService: ClientWallet_Service = inject(ClientWallet_Service);

	public providerWalletService: ProviderWallet_Service = inject(ProviderWallet_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<BookingTransaction> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<BookingTransaction[]> {
    return super.RetrieveAll();
  }

  override Save(bookingTransaction: BookingTransaction): Observable<BookingTransaction> {
    if (!BookingTransaction.Validate(bookingTransaction)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bookingTransaction);
    }
    return super.Save(bookingTransaction);
  }

  override SaveAttached(bookingTransaction: BookingTransaction): Observable<BookingTransaction> {
    if (!BookingTransaction.Validate(bookingTransaction)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bookingTransaction);
    }
    return super.SaveAttached(bookingTransaction);
  }

  override SaveCollection(bookingTransactionList: BookingTransaction[]): Observable<Result> {
    return super.SaveCollection(bookingTransactionList);
  }

  override Delete(bookingTransaction: BookingTransaction): Observable<boolean> {
    return super.Delete(bookingTransaction);
  }

  override Seek(bookingTransaction: BookingTransaction = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<BookingTransaction[]> {
    return super.Seek(bookingTransaction); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(bookingTransaction: BookingTransaction): Observable<BookingTransaction> {
    return super.SeekLast(bookingTransaction);
  }

  override SeekByValue(value: string = ''): Observable<BookingTransaction[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
