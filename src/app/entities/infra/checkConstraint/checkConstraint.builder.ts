

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { CheckConstraint } from '.';


@Injectable({ providedIn: 'root' })
export class CheckConstraint_Builder extends ServiceBuilder<CheckConstraint> implements IServiceBuilder<CheckConstraint> {

  constructor() {
        super();
    }

  
  BuildInstance(): CheckConstraint;
  BuildInstance(id: number): CheckConstraint;
  BuildInstance(id: number, descriptor: string): CheckConstraint;
  BuildInstance(id: number = 0, descriptor: string = ''): CheckConstraint {
    return new CheckConstraint(id, descriptor);
  }

  BuildSeekInstance(): CheckConstraint {
    return CheckConstraint_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): CheckConstraint {
    let checkConstraint = new CheckConstraint();
    checkConstraint.isActive = undefined;
    return checkConstraint;
  }
}