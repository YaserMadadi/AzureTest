
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ServicePrice } from '.';


@Injectable({ providedIn: 'root' })
export class ServicePrice_ServiceCollection extends ServiceCollection<ServicePrice> implements IServiceCollection<ServicePrice> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
