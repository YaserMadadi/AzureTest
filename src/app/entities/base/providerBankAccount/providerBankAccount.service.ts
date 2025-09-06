

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ProviderBankAccount, ProviderBankAccount_Builder } from '.';

import { Bank_Service } from '../bank';
import { Provider_Service } from '../provider';


@Injectable({ providedIn: 'root' })
export class ProviderBankAccount_Service extends Service<ProviderBankAccount> implements IService<ProviderBankAccount> {

  constructor() {
    super(ProviderBankAccount.Info, inject(ProviderBankAccount_Builder));
  }

  //#region Related Services
  
  public bankService: Bank_Service = inject(Bank_Service);

	public providerService: Provider_Service = inject(Provider_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ProviderBankAccount> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ProviderBankAccount[]> {
    return super.RetrieveAll();
  }

  override Save(providerBankAccount: ProviderBankAccount): Observable<ProviderBankAccount> {
    if (!ProviderBankAccount.Validate(providerBankAccount)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerBankAccount);
    }
    return super.Save(providerBankAccount);
  }

  override SaveAttached(providerBankAccount: ProviderBankAccount): Observable<ProviderBankAccount> {
    if (!ProviderBankAccount.Validate(providerBankAccount)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerBankAccount);
    }
    return super.SaveAttached(providerBankAccount);
  }

  override SaveCollection(providerBankAccountList: ProviderBankAccount[]): Observable<Result> {
    return super.SaveCollection(providerBankAccountList);
  }

  override Delete(providerBankAccount: ProviderBankAccount): Observable<boolean> {
    return super.Delete(providerBankAccount);
  }

  override Seek(providerBankAccount: ProviderBankAccount = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ProviderBankAccount[]> {
    return super.Seek(providerBankAccount); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(providerBankAccount: ProviderBankAccount): Observable<ProviderBankAccount> {
    return super.SeekLast(providerBankAccount);
  }

  override SeekByValue(value: string = ''): Observable<ProviderBankAccount[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
