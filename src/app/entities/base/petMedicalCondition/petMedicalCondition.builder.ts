

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { PetMedicalCondition } from '.';


@Injectable({ providedIn: 'root' })
export class PetMedicalCondition_Builder extends ServiceBuilder<PetMedicalCondition> implements IServiceBuilder<PetMedicalCondition> {

  constructor() {
        super();
    }

  
  BuildInstance(): PetMedicalCondition;
  BuildInstance(id: number): PetMedicalCondition;
  BuildInstance(id: number, descriptor: string): PetMedicalCondition;
  BuildInstance(id: number = 0, descriptor: string = ''): PetMedicalCondition {
    return new PetMedicalCondition(id, descriptor);
  }

  BuildSeekInstance(): PetMedicalCondition {
    return PetMedicalCondition_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): PetMedicalCondition {
    let petMedicalCondition = new PetMedicalCondition();
    petMedicalCondition.pet = undefined;
		petMedicalCondition.medicationType = undefined;
		petMedicalCondition.isActive = undefined;
    return petMedicalCondition;
  }
}