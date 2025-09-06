

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { Booking, Booking_Builder } from '.';

import { BookingStatus_Service } from '../bookingStatus';
import { DurationUnit_Service } from '../durationUnit';
import { Pet_Service } from '../pet';
import { Provider_Service } from '../provider';


@Injectable({ providedIn: 'root' })
export class Booking_Service extends Service<Booking> implements IService<Booking> {

  constructor() {
    super(Booking.Info, inject(Booking_Builder));
  }

  //#region Related Services
  
  public bookingStatusService: BookingStatus_Service = inject(BookingStatus_Service);

	public durationUnitService: DurationUnit_Service = inject(DurationUnit_Service);

	public petService: Pet_Service = inject(Pet_Service);

	public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<Booking> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Booking[]> {
    return super.RetrieveAll();
  }

  override Save(booking: Booking): Observable<Booking> {
    if (!Booking.Validate(booking)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(booking);
    }
    return super.Save(booking);
  }

  override SaveAttached(booking: Booking): Observable<Booking> {
    if (!Booking.Validate(booking)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(booking);
    }
    return super.SaveAttached(booking);
  }

  override SaveCollection(bookingList: Booking[]): Observable<Result> {
    return super.SaveCollection(bookingList);
  }

  override Delete(booking: Booking): Observable<boolean> {
    return super.Delete(booking);
  }

  override Seek(booking: Booking = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Booking[]> {
    return super.Seek(booking); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(booking: Booking): Observable<Booking> {
    return super.SeekLast(booking);
  }

  override SeekByValue(value: string = ''): Observable<Booking[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
