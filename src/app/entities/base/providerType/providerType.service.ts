

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ProviderType, ProviderType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class ProviderType_Service extends Service<ProviderType> implements IService<ProviderType> {

  constructor() {
    super(ProviderType.Info, inject(ProviderType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ProviderType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ProviderType[]> {
    return super.RetrieveAll();
  }

  override Save(providerType: ProviderType): Observable<ProviderType> {
    if (!ProviderType.Validate(providerType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerType);
    }
    return super.Save(providerType);
  }

  override SaveAttached(providerType: ProviderType): Observable<ProviderType> {
    if (!ProviderType.Validate(providerType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(providerType);
    }
    return super.SaveAttached(providerType);
  }

  override SaveCollection(providerTypeList: ProviderType[]): Observable<Result> {
    return super.SaveCollection(providerTypeList);
  }

  override Delete(providerType: ProviderType): Observable<boolean> {
    return super.Delete(providerType);
  }

  override Seek(providerType: ProviderType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ProviderType[]> {
    return super.Seek(providerType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(providerType: ProviderType): Observable<ProviderType> {
    return super.SeekLast(providerType);
  }

  override SeekByValue(value: string = ''): Observable<ProviderType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
