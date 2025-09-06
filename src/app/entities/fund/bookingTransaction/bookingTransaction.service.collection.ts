
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { BookingTransaction } from '.';


@Injectable({ providedIn: 'root' })
export class BookingTransaction_ServiceCollection extends ServiceCollection<BookingTransaction> implements IServiceCollection<BookingTransaction> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
