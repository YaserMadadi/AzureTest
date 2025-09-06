

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { BookingService, BookingService_Builder } from '.';

import { Booking_Service } from '../booking';
import { ProviderService_Service } from '../providerService';


@Injectable({ providedIn: 'root' })
export class BookingService_Service extends Service<BookingService> implements IService<BookingService> {

  constructor() {
    super(BookingService.Info, inject(BookingService_Builder));
  }

  //#region Related Services
  
  public bookingService: Booking_Service = inject(Booking_Service);

	public providerServiceService: ProviderService_Service = inject(ProviderService_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<BookingService> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<BookingService[]> {
    return super.RetrieveAll();
  }

  override Save(bookingService: BookingService): Observable<BookingService> {
    if (!BookingService.Validate(bookingService)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bookingService);
    }
    return super.Save(bookingService);
  }

  override SaveAttached(bookingService: BookingService): Observable<BookingService> {
    if (!BookingService.Validate(bookingService)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bookingService);
    }
    return super.SaveAttached(bookingService);
  }

  override SaveCollection(bookingServiceList: BookingService[]): Observable<Result> {
    return super.SaveCollection(bookingServiceList);
  }

  override Delete(bookingService: BookingService): Observable<boolean> {
    return super.Delete(bookingService);
  }

  override Seek(bookingService: BookingService = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<BookingService[]> {
    return super.Seek(bookingService); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(bookingService: BookingService): Observable<BookingService> {
    return super.SeekLast(bookingService);
  }

  override SeekByValue(value: string = ''): Observable<BookingService[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
