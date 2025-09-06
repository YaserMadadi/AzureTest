

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { PaymentMethod } from '.';


@Injectable({ providedIn: 'root' })
export class PaymentMethod_Builder extends ServiceBuilder<PaymentMethod> implements IServiceBuilder<PaymentMethod> {

  constructor() {
        super();
    }

  
  BuildInstance(): PaymentMethod;
  BuildInstance(id: number): PaymentMethod;
  BuildInstance(id: number, descriptor: string): PaymentMethod;
  BuildInstance(id: number = 0, descriptor: string = ''): PaymentMethod {
    return new PaymentMethod(id, descriptor);
  }

  BuildSeekInstance(): PaymentMethod {
    return PaymentMethod_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): PaymentMethod {
    let paymentMethod = new PaymentMethod();
    paymentMethod.isActive = undefined;
    return paymentMethod;
  }
}