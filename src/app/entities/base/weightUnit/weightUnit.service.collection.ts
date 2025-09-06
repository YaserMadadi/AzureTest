
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { WeightUnit } from '.';
import { Pet, Pet_Builder } from '../pet';


@Injectable({ providedIn: 'root' })
export class WeightUnit_ServiceCollection extends ServiceCollection<WeightUnit> implements IServiceCollection<WeightUnit> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfPet(weightUnit_id: number, pet: Pet = Pet_Builder.BuildSeekInstance()): Observable<Pet[]> {
    return super.CollectionOf<Pet>(new WeightUnit(weightUnit_id), pet);
  }

	//#endregion
}
