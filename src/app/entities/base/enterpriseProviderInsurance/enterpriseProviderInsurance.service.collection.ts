
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { EnterpriseProviderInsurance } from '.';


@Injectable({ providedIn: 'root' })
export class EnterpriseProviderInsurance_ServiceCollection extends ServiceCollection<EnterpriseProviderInsurance> implements IServiceCollection<EnterpriseProviderInsurance> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
