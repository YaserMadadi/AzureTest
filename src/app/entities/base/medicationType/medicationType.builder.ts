

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { MedicationType } from '.';


@Injectable({ providedIn: 'root' })
export class MedicationType_Builder extends ServiceBuilder<MedicationType> implements IServiceBuilder<MedicationType> {

  constructor() {
        super();
    }

  
  BuildInstance(): MedicationType;
  BuildInstance(id: number): MedicationType;
  BuildInstance(id: number, descriptor: string): MedicationType;
  BuildInstance(id: number = 0, descriptor: string = ''): MedicationType {
    return new MedicationType(id, descriptor);
  }

  BuildSeekInstance(): MedicationType {
    return MedicationType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): MedicationType {
    let medicationType = new MedicationType();
    medicationType.isActive = undefined;
    return medicationType;
  }
}