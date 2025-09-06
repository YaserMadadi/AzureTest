
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { PetMedicalCondition } from '.';


@Injectable({ providedIn: 'root' })
export class PetMedicalCondition_ServiceCollection extends ServiceCollection<PetMedicalCondition> implements IServiceCollection<PetMedicalCondition> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
