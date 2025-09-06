
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { AccountStatus } from '.';
import { UserAccount, UserAccount_Builder } from '../userAccount';


@Injectable({ providedIn: 'root' })
export class AccountStatus_ServiceCollection extends ServiceCollection<AccountStatus> implements IServiceCollection<AccountStatus> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfUserAccount(accountStatus_id: number, userAccount: UserAccount = UserAccount_Builder.BuildSeekInstance()): Observable<UserAccount[]> {
    return super.CollectionOf<UserAccount>(new AccountStatus(accountStatus_id), userAccount);
  }

	//#endregion
}
