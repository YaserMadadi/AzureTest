
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ProviderService } from '.';
import { BookingService, BookingService_Builder } from '../bookingService';
import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Builder } from '../serviceOrientedWorkTime';
import { ServicePrice, ServicePrice_Builder } from '../servicePrice';


@Injectable({ providedIn: 'root' })
export class ProviderService_ServiceCollection extends ServiceCollection<ProviderService> implements IServiceCollection<ProviderService> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfBookingService(providerService_id: number, bookingService: BookingService = BookingService_Builder.BuildSeekInstance()): Observable<BookingService[]> {
    return super.CollectionOf<BookingService>(new ProviderService(providerService_id), bookingService);
  }

  CollectionOfServiceOrientedWorkTime(providerService_id: number, serviceOrientedWorkTime: ServiceOrientedWorkTime = ServiceOrientedWorkTime_Builder.BuildSeekInstance()): Observable<ServiceOrientedWorkTime[]> {
    return super.CollectionOf<ServiceOrientedWorkTime>(new ProviderService(providerService_id), serviceOrientedWorkTime);
  }

  CollectionOfServicePrice(providerService_id: number, servicePrice: ServicePrice = ServicePrice_Builder.BuildSeekInstance()): Observable<ServicePrice[]> {
    return super.CollectionOf<ServicePrice>(new ProviderService(providerService_id), servicePrice);
  }

	//#endregion
}
