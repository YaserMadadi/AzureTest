
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ClientWalletTransactionLog } from '.';


@Injectable({ providedIn: 'root' })
export class ClientWalletTransactionLog_ServiceCollection extends ServiceCollection<ClientWalletTransactionLog> implements IServiceCollection<ClientWalletTransactionLog> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
