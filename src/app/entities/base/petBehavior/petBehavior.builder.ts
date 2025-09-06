

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { PetBehavior } from '.';


@Injectable({ providedIn: 'root' })
export class PetBehavior_Builder extends ServiceBuilder<PetBehavior> implements IServiceBuilder<PetBehavior> {

  constructor() {
        super();
    }

  
  BuildInstance(): PetBehavior;
  BuildInstance(id: number): PetBehavior;
  BuildInstance(id: number, descriptor: string): PetBehavior;
  BuildInstance(id: number = 0, descriptor: string = ''): PetBehavior {
    return new PetBehavior(id, descriptor);
  }

  BuildSeekInstance(): PetBehavior {
    return PetBehavior_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): PetBehavior {
    let petBehavior = new PetBehavior();
    petBehavior.pet = undefined;
		petBehavior.behaviorCategory = undefined;
    return petBehavior;
  }
}