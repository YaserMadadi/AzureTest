

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ServicePrice } from '.';


@Injectable({ providedIn: 'root' })
export class ServicePrice_Builder extends ServiceBuilder<ServicePrice> implements IServiceBuilder<ServicePrice> {

  constructor() {
        super();
    }

  
  BuildInstance(): ServicePrice;
  BuildInstance(id: number): ServicePrice;
  BuildInstance(id: number, descriptor: string): ServicePrice;
  BuildInstance(id: number = 0, descriptor: string = ''): ServicePrice {
    return new ServicePrice(id, descriptor);
  }

  BuildSeekInstance(): ServicePrice {
    return ServicePrice_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ServicePrice {
    let servicePrice = new ServicePrice();
    servicePrice.providerService = undefined;
		servicePrice.priceScope = undefined;
		servicePrice.isActive = undefined;
    return servicePrice;
  }
}