
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { AcceptedPetCategory } from '.';


@Injectable({ providedIn: 'root' })
export class AcceptedPetCategory_ServiceCollection extends ServiceCollection<AcceptedPetCategory> implements IServiceCollection<AcceptedPetCategory> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
