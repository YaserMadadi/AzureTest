

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { Bank } from '.';


@Injectable({ providedIn: 'root' })
export class Bank_Builder extends ServiceBuilder<Bank> implements IServiceBuilder<Bank> {

  constructor() {
        super();
    }

  
  BuildInstance(): Bank;
  BuildInstance(id: number): Bank;
  BuildInstance(id: number, descriptor: string): Bank;
  BuildInstance(id: number = 0, descriptor: string = ''): Bank {
    return new Bank(id, descriptor);
  }

  BuildSeekInstance(): Bank {
    return Bank_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): Bank {
    let bank = new Bank();
    bank.isActive = undefined;
    return bank;
  }
}