
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { PetCategory } from '.';
import { AcceptedPetCategory, AcceptedPetCategory_Builder } from '../acceptedPetCategory';


@Injectable({ providedIn: 'root' })
export class PetCategory_ServiceCollection extends ServiceCollection<PetCategory> implements IServiceCollection<PetCategory> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfAcceptedPetCategory(petCategory_id: number, acceptedPetCategory: AcceptedPetCategory = AcceptedPetCategory_Builder.BuildSeekInstance()): Observable<AcceptedPetCategory[]> {
    return super.CollectionOf<AcceptedPetCategory>(new PetCategory(petCategory_id), acceptedPetCategory);
  }

	//#endregion
}
