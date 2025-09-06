
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';
import { Provider_ServiceCollection } from '../provider';
import { EnterpriseProvider } from '.';
import { EnterpriseProviderInsurance, EnterpriseProviderInsurance_Builder } from '../enterpriseProviderInsurance';


@Injectable({ providedIn: 'root' })
export class EnterpriseProvider_ServiceCollection extends Provider_ServiceCollection<EnterpriseProvider> implements IServiceCollection<EnterpriseProvider> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfEnterpriseProviderInsurance(enterpriseProvider_id: number, enterpriseProviderInsurance: EnterpriseProviderInsurance = EnterpriseProviderInsurance_Builder.BuildSeekInstance()): Observable<EnterpriseProviderInsurance[]> {
    return super.CollectionOf<EnterpriseProviderInsurance>(new EnterpriseProvider(enterpriseProvider_id), enterpriseProviderInsurance);
  }

  //#endregion
}
