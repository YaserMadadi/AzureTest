

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { PriceScope } from '.';


@Injectable({ providedIn: 'root' })
export class PriceScope_Builder extends ServiceBuilder<PriceScope> implements IServiceBuilder<PriceScope> {

  constructor() {
        super();
    }

  
  BuildInstance(): PriceScope;
  BuildInstance(id: number): PriceScope;
  BuildInstance(id: number, descriptor: string): PriceScope;
  BuildInstance(id: number = 0, descriptor: string = ''): PriceScope {
    return new PriceScope(id, descriptor);
  }

  BuildSeekInstance(): PriceScope {
    return PriceScope_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): PriceScope {
    let priceScope = new PriceScope();
    priceScope.isActive = undefined;
    return priceScope;
  }
}