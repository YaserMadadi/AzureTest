
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ProviderBankAccount } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderBankAccount_ServiceCollection extends ServiceCollection<ProviderBankAccount> implements IServiceCollection<ProviderBankAccount> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
