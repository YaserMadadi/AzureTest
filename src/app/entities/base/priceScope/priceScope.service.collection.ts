
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { PriceScope } from '.';
import { ServicePrice, ServicePrice_Builder } from '../servicePrice';


@Injectable({ providedIn: 'root' })
export class PriceScope_ServiceCollection extends ServiceCollection<PriceScope> implements IServiceCollection<PriceScope> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfServicePrice(priceScope_id: number, servicePrice: ServicePrice = ServicePrice_Builder.BuildSeekInstance()): Observable<ServicePrice[]> {
    return super.CollectionOf<ServicePrice>(new PriceScope(priceScope_id), servicePrice);
  }

	//#endregion
}
