

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { UserAccount, UserAccount_Builder } from '.';

import { AccountStatus_Service } from '../accountStatus';
import { UserType_Service } from '../../admin/userType';


@Injectable({ providedIn: 'root' })
export class UserAccount_Service extends Service<UserAccount> implements IService<UserAccount> {

  constructor() {
    super(UserAccount.Info, inject(UserAccount_Builder));
  }

  //#region Related Services
  
  public accountStatusService: AccountStatus_Service = inject(AccountStatus_Service);

	public userTypeService: UserType_Service = inject(UserType_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<UserAccount> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<UserAccount[]> {
    return super.RetrieveAll();
  }

  override Save(userAccount: UserAccount): Observable<UserAccount> {
    if (!UserAccount.Validate(userAccount)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(userAccount);
    }
    return super.Save(userAccount);
  }

  override SaveAttached(userAccount: UserAccount): Observable<UserAccount> {
    if (!UserAccount.Validate(userAccount)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(userAccount);
    }
    return super.SaveAttached(userAccount);
  }

  override SaveCollection(userAccountList: UserAccount[]): Observable<Result> {
    return super.SaveCollection(userAccountList);
  }

  override Delete(userAccount: UserAccount): Observable<boolean> {
    return super.Delete(userAccount);
  }

  override Seek(userAccount: UserAccount = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<UserAccount[]> {
    return super.Seek(userAccount); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(userAccount: UserAccount): Observable<UserAccount> {
    return super.SeekLast(userAccount);
  }

  override SeekByValue(value: string = ''): Observable<UserAccount[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
