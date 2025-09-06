
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ClientReview } from '.';


@Injectable({ providedIn: 'root' })
export class ClientReview_ServiceCollection extends ServiceCollection<ClientReview> implements IServiceCollection<ClientReview> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
