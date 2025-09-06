

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { AccountStatus } from '.';


@Injectable({ providedIn: 'root' })
export class AccountStatus_Builder extends ServiceBuilder<AccountStatus> implements IServiceBuilder<AccountStatus> {

  constructor() {
        super();
    }

  
  BuildInstance(): AccountStatus;
  BuildInstance(id: number): AccountStatus;
  BuildInstance(id: number, descriptor: string): AccountStatus;
  BuildInstance(id: number = 0, descriptor: string = ''): AccountStatus {
    return new AccountStatus(id, descriptor);
  }

  BuildSeekInstance(): AccountStatus {
    return AccountStatus_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): AccountStatus {
    let accountStatus = new AccountStatus();
    accountStatus.isActive = undefined;
    return accountStatus;
  }
}