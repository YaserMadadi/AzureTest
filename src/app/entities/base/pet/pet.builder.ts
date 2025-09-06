

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Pet } from '.';


@Injectable({ providedIn: 'root' })
export class Pet_Builder extends ServiceBuilder<Pet> implements IServiceBuilder<Pet> {

  constructor() {
        super();
    }

  
  BuildInstance(): Pet;
  BuildInstance(id: number): Pet;
  BuildInstance(id: number, descriptor: string): Pet;
  BuildInstance(id: number = 0, descriptor: string = ''): Pet {
    return new Pet(id, descriptor);
  }

  BuildSeekInstance(): Pet {
    return Pet_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Pet {
    let pet = new Pet();
    pet.client = undefined;
		pet.gender = undefined;
		pet.weightUnit = undefined;
		pet.dateOfBirth = undefined;
		pet.isActive = undefined;
    return pet;
  }
}