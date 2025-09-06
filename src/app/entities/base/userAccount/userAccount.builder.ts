

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { UserAccount } from '.';


@Injectable({ providedIn: 'root' })
export class UserAccount_Builder extends ServiceBuilder<UserAccount> implements IServiceBuilder<UserAccount> {

  constructor() {
        super();
    }

  
  BuildInstance(): UserAccount;
  BuildInstance(id: number): UserAccount;
  BuildInstance(id: number, descriptor: string): UserAccount;
  BuildInstance(id: number = 0, descriptor: string = ''): UserAccount {
    return new UserAccount(id, descriptor);
  }

  BuildSeekInstance(): UserAccount {
    return UserAccount_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): UserAccount {
    let userAccount = new UserAccount();
    userAccount.userType = undefined;
		userAccount.accountStatus = undefined;
		userAccount.emailIsVerified = undefined;
		userAccount.isActive = undefined;
    return userAccount;
  }
}