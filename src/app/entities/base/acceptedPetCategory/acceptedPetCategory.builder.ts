

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { AcceptedPetCategory } from '.';


@Injectable({ providedIn: 'root' })
export class AcceptedPetCategory_Builder extends ServiceBuilder<AcceptedPetCategory> implements IServiceBuilder<AcceptedPetCategory> {

  constructor() {
        super();
    }

  
  BuildInstance(): AcceptedPetCategory;
  BuildInstance(id: number): AcceptedPetCategory;
  BuildInstance(id: number, descriptor: string): AcceptedPetCategory;
  BuildInstance(id: number = 0, descriptor: string = ''): AcceptedPetCategory {
    return new AcceptedPetCategory(id, descriptor);
  }

  BuildSeekInstance(): AcceptedPetCategory {
    return AcceptedPetCategory_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): AcceptedPetCategory {
    let acceptedPetCategory = new AcceptedPetCategory();
    acceptedPetCategory.provider = undefined;
		acceptedPetCategory.petCategory = undefined;
		acceptedPetCategory.isActive = undefined;
    return acceptedPetCategory;
  }
}