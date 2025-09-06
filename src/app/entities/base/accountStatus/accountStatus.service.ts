

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { AccountStatus, AccountStatus_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class AccountStatus_Service extends Service<AccountStatus> implements IService<AccountStatus> {

  constructor() {
    super(AccountStatus.Info, inject(AccountStatus_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<AccountStatus> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<AccountStatus[]> {
    return super.RetrieveAll();
  }

  override Save(accountStatus: AccountStatus): Observable<AccountStatus> {
    if (!AccountStatus.Validate(accountStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(accountStatus);
    }
    return super.Save(accountStatus);
  }

  override SaveAttached(accountStatus: AccountStatus): Observable<AccountStatus> {
    if (!AccountStatus.Validate(accountStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(accountStatus);
    }
    return super.SaveAttached(accountStatus);
  }

  override SaveCollection(accountStatusList: AccountStatus[]): Observable<Result> {
    return super.SaveCollection(accountStatusList);
  }

  override Delete(accountStatus: AccountStatus): Observable<boolean> {
    return super.Delete(accountStatus);
  }

  override Seek(accountStatus: AccountStatus = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<AccountStatus[]> {
    return super.Seek(accountStatus); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(accountStatus: AccountStatus): Observable<AccountStatus> {
    return super.SeekLast(accountStatus);
  }

  override SeekByValue(value: string = ''): Observable<AccountStatus[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
