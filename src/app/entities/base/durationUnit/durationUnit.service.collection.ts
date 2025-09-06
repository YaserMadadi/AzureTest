
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { DurationUnit } from '.';
import { Booking, Booking_Builder } from '../booking';


@Injectable({ providedIn: 'root' })
export class DurationUnit_ServiceCollection extends ServiceCollection<DurationUnit> implements IServiceCollection<DurationUnit> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfBooking(durationUnit_id: number, booking: Booking = Booking_Builder.BuildSeekInstance()): Observable<Booking[]> {
    return super.CollectionOf<Booking>(new DurationUnit(durationUnit_id), booking);
  }

	//#endregion
}
