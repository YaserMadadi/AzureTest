
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { UserType } from '.';
import { Menu, Menu_Builder } from '../menu';
import { UserAccount, UserAccount_Builder } from '../../base/userAccount';


@Injectable({ providedIn: 'root' })
export class UserType_ServiceCollection extends ServiceCollection<UserType> implements IServiceCollection<UserType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfMenu(userType_id: number, menu: Menu = Menu_Builder.BuildSeekInstance()): Observable<Menu[]> {
    return super.CollectionOf<Menu>(new UserType(userType_id), menu);
  }

  CollectionOfUserAccount(userType_id: number, userAccount: UserAccount = UserAccount_Builder.BuildSeekInstance()): Observable<UserAccount[]> {
    return super.CollectionOf<UserAccount>(new UserType(userType_id), userAccount);
  }

	//#endregion
}
