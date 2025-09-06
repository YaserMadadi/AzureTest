

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { TransactionStatus } from '.';


@Injectable({ providedIn: 'root' })
export class TransactionStatus_Builder extends ServiceBuilder<TransactionStatus> implements IServiceBuilder<TransactionStatus> {

  constructor() {
        super();
    }

  
  BuildInstance(): TransactionStatus;
  BuildInstance(id: number): TransactionStatus;
  BuildInstance(id: number, descriptor: string): TransactionStatus;
  BuildInstance(id: number = 0, descriptor: string = ''): TransactionStatus {
    return new TransactionStatus(id, descriptor);
  }

  BuildSeekInstance(): TransactionStatus {
    return TransactionStatus_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): TransactionStatus {
    let transactionStatus = new TransactionStatus();
    transactionStatus.isActive = undefined;
    return transactionStatus;
  }
}