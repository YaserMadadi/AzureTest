

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { BehaviorCategory } from '.';


@Injectable({ providedIn: 'root' })
export class BehaviorCategory_Builder extends ServiceBuilder<BehaviorCategory> implements IServiceBuilder<BehaviorCategory> {

  constructor() {
        super();
    }

  
  BuildInstance(): BehaviorCategory;
  BuildInstance(id: number): BehaviorCategory;
  BuildInstance(id: number, descriptor: string): BehaviorCategory;
  BuildInstance(id: number = 0, descriptor: string = ''): BehaviorCategory {
    return new BehaviorCategory(id, descriptor);
  }

  BuildSeekInstance(): BehaviorCategory {
    return BehaviorCategory_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): BehaviorCategory {
    let behaviorCategory = new BehaviorCategory();
    behaviorCategory.isActive = undefined;
    return behaviorCategory;
  }
}