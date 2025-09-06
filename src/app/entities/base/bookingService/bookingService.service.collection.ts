
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { BookingService } from '.';


@Injectable({ providedIn: 'root' })
export class BookingService_ServiceCollection extends ServiceCollection<BookingService> implements IServiceCollection<BookingService> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
