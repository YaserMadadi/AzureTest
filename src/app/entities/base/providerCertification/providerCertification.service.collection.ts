
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ProviderCertification } from '.';


@Injectable({ providedIn: 'root' })
export class ProviderCertification_ServiceCollection extends ServiceCollection<ProviderCertification> implements IServiceCollection<ProviderCertification> {

  constructor() {
    super();
  }

  //#region CollectionMethods

	//#endregion
}
