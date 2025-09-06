

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { BookingStatus } from '.';


@Injectable({ providedIn: 'root' })
export class BookingStatus_Builder extends ServiceBuilder<BookingStatus> implements IServiceBuilder<BookingStatus> {

  constructor() {
        super();
    }

  
  BuildInstance(): BookingStatus;
  BuildInstance(id: number): BookingStatus;
  BuildInstance(id: number, descriptor: string): BookingStatus;
  BuildInstance(id: number = 0, descriptor: string = ''): BookingStatus {
    return new BookingStatus(id, descriptor);
  }

  BuildSeekInstance(): BookingStatus {
    return BookingStatus_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): BookingStatus {
    let bookingStatus = new BookingStatus();
    bookingStatus.isActive = undefined;
    return bookingStatus;
  }
}