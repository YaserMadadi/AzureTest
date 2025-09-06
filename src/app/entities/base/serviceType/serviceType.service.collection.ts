
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { ServiceType } from '.';
import { ProviderService, ProviderService_Builder } from '../providerService';


@Injectable({ providedIn: 'root' })
export class ServiceType_ServiceCollection extends ServiceCollection<ServiceType> implements IServiceCollection<ServiceType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfProviderService(serviceType_id: number, providerService: ProviderService = ProviderService_Builder.BuildSeekInstance()): Observable<ProviderService[]> {
    return super.CollectionOf<ProviderService>(new ServiceType(serviceType_id), providerService);
  }

	//#endregion
}
