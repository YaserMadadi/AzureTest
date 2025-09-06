
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ProviderType } from '.';
import { Provider, Provider_Builder } from '../provider';


@Injectable({ providedIn: 'root' })
export class ProviderType_ServiceCollection extends ServiceCollection<ProviderType> implements IServiceCollection<ProviderType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfProvider(providerType_id: number, provider: Provider = Provider_Builder.BuildSeekInstance()): Observable<Provider[]> {
    return super.CollectionOf<Provider>(new ProviderType(providerType_id), provider);
  }

	//#endregion
}
