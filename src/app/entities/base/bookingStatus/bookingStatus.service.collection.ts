
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { BookingStatus } from '.';
import { Booking, Booking_Builder } from '../booking';


@Injectable({ providedIn: 'root' })
export class BookingStatus_ServiceCollection extends ServiceCollection<BookingStatus> implements IServiceCollection<BookingStatus> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfBooking(bookingStatus_id: number, booking: Booking = Booking_Builder.BuildSeekInstance()): Observable<Booking[]> {
    return super.CollectionOf<Booking>(new BookingStatus(bookingStatus_id), booking);
  }

	//#endregion
}
