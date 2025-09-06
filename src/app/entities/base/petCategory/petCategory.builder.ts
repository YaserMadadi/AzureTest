

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { PetCategory } from '.';


@Injectable({ providedIn: 'root' })
export class PetCategory_Builder extends ServiceBuilder<PetCategory> implements IServiceBuilder<PetCategory> {

  constructor() {
        super();
    }

  
  BuildInstance(): PetCategory;
  BuildInstance(id: number): PetCategory;
  BuildInstance(id: number, descriptor: string): PetCategory;
  BuildInstance(id: number = 0, descriptor: string = ''): PetCategory {
    return new PetCategory(id, descriptor);
  }

  BuildSeekInstance(): PetCategory {
    return PetCategory_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): PetCategory {
    let petCategory = new PetCategory();
    petCategory.isActive = undefined;
    return petCategory;
  }
}