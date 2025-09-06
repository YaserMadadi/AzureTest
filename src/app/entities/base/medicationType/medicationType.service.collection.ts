
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { MedicationType } from '.';
import { PetMedicalCondition, PetMedicalCondition_Builder } from '../petMedicalCondition';


@Injectable({ providedIn: 'root' })
export class MedicationType_ServiceCollection extends ServiceCollection<MedicationType> implements IServiceCollection<MedicationType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfPetMedicalCondition(medicationType_id: number, petMedicalCondition: PetMedicalCondition = PetMedicalCondition_Builder.BuildSeekInstance()): Observable<PetMedicalCondition[]> {
    return super.CollectionOf<PetMedicalCondition>(new MedicationType(medicationType_id), petMedicalCondition);
  }

	//#endregion
}
