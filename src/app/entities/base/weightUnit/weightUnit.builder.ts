

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { WeightUnit } from '.';


@Injectable({ providedIn: 'root' })
export class WeightUnit_Builder extends ServiceBuilder<WeightUnit> implements IServiceBuilder<WeightUnit> {

  constructor() {
        super();
    }

  
  BuildInstance(): WeightUnit;
  BuildInstance(id: number): WeightUnit;
  BuildInstance(id: number, descriptor: string): WeightUnit;
  BuildInstance(id: number = 0, descriptor: string = ''): WeightUnit {
    return new WeightUnit(id, descriptor);
  }

  BuildSeekInstance(): WeightUnit {
    return WeightUnit_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): WeightUnit {
    let weightUnit = new WeightUnit();
    weightUnit.isActive = undefined;
    return weightUnit;
  }
}