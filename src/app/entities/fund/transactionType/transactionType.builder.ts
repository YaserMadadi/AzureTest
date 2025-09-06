

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { TransactionType } from '.';


@Injectable({ providedIn: 'root' })
export class TransactionType_Builder extends ServiceBuilder<TransactionType> implements IServiceBuilder<TransactionType> {

  constructor() {
        super();
    }

  
  BuildInstance(): TransactionType;
  BuildInstance(id: number): TransactionType;
  BuildInstance(id: number, descriptor: string): TransactionType;
  BuildInstance(id: number = 0, descriptor: string = ''): TransactionType {
    return new TransactionType(id, descriptor);
  }

  BuildSeekInstance(): TransactionType {
    return TransactionType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): TransactionType {
    let transactionType = new TransactionType();
    transactionType.isActive = undefined;
    return transactionType;
  }
}