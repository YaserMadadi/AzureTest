

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { BookingService } from '.';


@Injectable({ providedIn: 'root' })
export class BookingService_Builder extends ServiceBuilder<BookingService> implements IServiceBuilder<BookingService> {

  constructor() {
        super();
    }

  
  BuildInstance(): BookingService;
  BuildInstance(id: number): BookingService;
  BuildInstance(id: number, descriptor: string): BookingService;
  BuildInstance(id: number = 0, descriptor: string = ''): BookingService {
    return new BookingService(id, descriptor);
  }

  BuildSeekInstance(): BookingService {
    return BookingService_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): BookingService {
    let bookingService = new BookingService();
    bookingService.booking = undefined;
		bookingService.providerService = undefined;
		bookingService.isActive = undefined;
    return bookingService;
  }
}