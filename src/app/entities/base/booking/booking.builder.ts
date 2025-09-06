

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Booking } from '.';


@Injectable({ providedIn: 'root' })
export class Booking_Builder extends ServiceBuilder<Booking> implements IServiceBuilder<Booking> {

  constructor() {
        super();
    }

  
  BuildInstance(): Booking;
  BuildInstance(id: number): Booking;
  BuildInstance(id: number, descriptor: string): Booking;
  BuildInstance(id: number = 0, descriptor: string = ''): Booking {
    return new Booking(id, descriptor);
  }

  BuildSeekInstance(): Booking {
    return Booking_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Booking {
    let booking = new Booking();
    booking.pet = undefined;
		booking.provider = undefined;
		booking.startDate = undefined;
		booking.startTime = undefined;
		booking.durationUnit = undefined;
		booking.bookingStatus = undefined;
		booking.isActive = undefined;
    return booking;
  }
}