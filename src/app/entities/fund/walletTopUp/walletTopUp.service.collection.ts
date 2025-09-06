
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { WalletTopUp } from '.';


@Injectable({ providedIn: 'root' })
export class WalletTopUp_ServiceCollection extends ServiceCollection<WalletTopUp> implements IServiceCollection<WalletTopUp> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
