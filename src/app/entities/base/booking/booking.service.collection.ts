
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Booking } from '.';
import { BookingService, BookingService_Builder } from '../bookingService';
import { BookingTransaction, BookingTransaction_Builder } from '../../fund/bookingTransaction';


@Injectable({ providedIn: 'root' })
export class Booking_ServiceCollection extends ServiceCollection<Booking> implements IServiceCollection<Booking> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfBookingService(booking_id: number, bookingService: BookingService = BookingService_Builder.BuildSeekInstance()): Observable<BookingService[]> {
    return super.CollectionOf<BookingService>(new Booking(booking_id), bookingService);
  }

  CollectionOfBookingTransaction(booking_id: number, bookingTransaction: BookingTransaction = BookingTransaction_Builder.BuildSeekInstance()): Observable<BookingTransaction[]> {
    return super.CollectionOf<BookingTransaction>(new Booking(booking_id), bookingTransaction);
  }

	//#endregion
}
