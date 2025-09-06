

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { BookingStatus, BookingStatus_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class BookingStatus_Service extends Service<BookingStatus> implements IService<BookingStatus> {

  constructor() {
    super(BookingStatus.Info, inject(BookingStatus_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<BookingStatus> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<BookingStatus[]> {
    return super.RetrieveAll();
  }

  override Save(bookingStatus: BookingStatus): Observable<BookingStatus> {
    if (!BookingStatus.Validate(bookingStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bookingStatus);
    }
    return super.Save(bookingStatus);
  }

  override SaveAttached(bookingStatus: BookingStatus): Observable<BookingStatus> {
    if (!BookingStatus.Validate(bookingStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(bookingStatus);
    }
    return super.SaveAttached(bookingStatus);
  }

  override SaveCollection(bookingStatusList: BookingStatus[]): Observable<Result> {
    return super.SaveCollection(bookingStatusList);
  }

  override Delete(bookingStatus: BookingStatus): Observable<boolean> {
    return super.Delete(bookingStatus);
  }

  override Seek(bookingStatus: BookingStatus = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<BookingStatus[]> {
    return super.Seek(bookingStatus); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(bookingStatus: BookingStatus): Observable<BookingStatus> {
    return super.SeekLast(bookingStatus);
  }

  override SeekByValue(value: string = ''): Observable<BookingStatus[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
