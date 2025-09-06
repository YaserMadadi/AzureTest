

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ServiceType, ServiceType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class ServiceType_Service extends Service<ServiceType> implements IService<ServiceType> {

  constructor() {
    super(ServiceType.Info, inject(ServiceType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ServiceType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ServiceType[]> {
    return super.RetrieveAll();
  }

  override Save(serviceType: ServiceType): Observable<ServiceType> {
    if (!ServiceType.Validate(serviceType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(serviceType);
    }
    return super.Save(serviceType);
  }

  override SaveAttached(serviceType: ServiceType): Observable<ServiceType> {
    if (!ServiceType.Validate(serviceType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(serviceType);
    }
    return super.SaveAttached(serviceType);
  }

  override SaveCollection(serviceTypeList: ServiceType[]): Observable<Result> {
    return super.SaveCollection(serviceTypeList);
  }

  override Delete(serviceType: ServiceType): Observable<boolean> {
    return super.Delete(serviceType);
  }

  override Seek(serviceType: ServiceType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ServiceType[]> {
    return super.Seek(serviceType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(serviceType: ServiceType): Observable<ServiceType> {
    return super.SeekLast(serviceType);
  }

  override SeekByValue(value: string = ''): Observable<ServiceType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
