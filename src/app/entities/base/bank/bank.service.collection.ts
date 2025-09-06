
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { Bank } from '.';
import { ProviderBankAccount, ProviderBankAccount_Builder } from '../providerBankAccount';


@Injectable({ providedIn: 'root' })
export class Bank_ServiceCollection extends ServiceCollection<Bank> implements IServiceCollection<Bank> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfProviderBankAccount(bank_id: number, providerBankAccount: ProviderBankAccount = ProviderBankAccount_Builder.BuildSeekInstance()): Observable<ProviderBankAccount[]> {
    return super.CollectionOf<ProviderBankAccount>(new Bank(bank_id), providerBankAccount);
  }

	//#endregion
}
