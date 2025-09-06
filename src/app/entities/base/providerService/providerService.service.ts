

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ProviderService, ProviderService_Builder } from '.';

import { Provider_Service } from '../provider';
import { ServiceType_Service } from '../serviceType';


@Injectable({ providedIn: 'root' })
export class ProviderService_Service extends Service<ProviderService> implements IService<ProviderService> {

  constructor() {
    super(ProviderService.Info, inject(ProviderService_Builder));
  }

  //#region Related Services
  
  public providerService: Provider_Service = inject(Provider_Service);

	public serviceTypeService: ServiceType_Service = inject(ServiceType_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ProviderService> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ProviderService[]> {
    return super.RetrieveAll();
  }

  override Save(providerService: ProviderService): Observable<ProviderService> {
    if (!ProviderService.Validate(providerService)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerService);
    }
    return super.Save(providerService);
  }

  override SaveAttached(providerService: ProviderService): Observable<ProviderService> {
    if (!ProviderService.Validate(providerService)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerService);
    }
    return super.SaveAttached(providerService);
  }

  override SaveCollection(providerServiceList: ProviderService[]): Observable<Result> {
    return super.SaveCollection(providerServiceList);
  }

  override Delete(providerService: ProviderService): Observable<boolean> {
    return super.Delete(providerService);
  }

  override Seek(providerService: ProviderService = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ProviderService[]> {
    return super.Seek(providerService); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(providerService: ProviderService): Observable<ProviderService> {
    return super.SeekLast(providerService);
  }

  override SeekByValue(value: string = ''): Observable<ProviderService[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
