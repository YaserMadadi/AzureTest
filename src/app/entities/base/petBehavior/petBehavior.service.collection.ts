
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { PetBehavior } from '.';


@Injectable({ providedIn: 'root' })
export class PetBehavior_ServiceCollection extends ServiceCollection<PetBehavior> implements IServiceCollection<PetBehavior> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
