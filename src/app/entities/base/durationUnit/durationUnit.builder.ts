

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { DurationUnit } from '.';


@Injectable({ providedIn: 'root' })
export class DurationUnit_Builder extends ServiceBuilder<DurationUnit> implements IServiceBuilder<DurationUnit> {

  constructor() {
        super();
    }

  
  BuildInstance(): DurationUnit;
  BuildInstance(id: number): DurationUnit;
  BuildInstance(id: number, descriptor: string): DurationUnit;
  BuildInstance(id: number = 0, descriptor: string = ''): DurationUnit {
    return new DurationUnit(id, descriptor);
  }

  BuildSeekInstance(): DurationUnit {
    return DurationUnit_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): DurationUnit {
    let durationUnit = new DurationUnit();
    durationUnit.isActive = undefined;
    return durationUnit;
  }
}