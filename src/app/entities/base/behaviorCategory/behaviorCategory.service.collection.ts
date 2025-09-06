
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { BehaviorCategory } from '.';
import { PetBehavior, PetBehavior_Builder } from '../petBehavior';


@Injectable({ providedIn: 'root' })
export class BehaviorCategory_ServiceCollection extends ServiceCollection<BehaviorCategory> implements IServiceCollection<BehaviorCategory> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfPetBehavior(behaviorCategory_id: number, petBehavior: PetBehavior = PetBehavior_Builder.BuildSeekInstance()): Observable<PetBehavior[]> {
    return super.CollectionOf<PetBehavior>(new BehaviorCategory(behaviorCategory_id), petBehavior);
  }

	//#endregion
}
