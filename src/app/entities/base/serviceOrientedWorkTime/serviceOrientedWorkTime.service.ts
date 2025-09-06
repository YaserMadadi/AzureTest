

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ServiceOrientedWorkTime, ServiceOrientedWorkTime_Builder } from '.';

import { ProviderService_Service } from '../providerService';
import { WeekDay_Service } from '../weekDay';


@Injectable({ providedIn: 'root' })
export class ServiceOrientedWorkTime_Service extends Service<ServiceOrientedWorkTime> implements IService<ServiceOrientedWorkTime> {

  constructor() {
    super(ServiceOrientedWorkTime.Info, inject(ServiceOrientedWorkTime_Builder));
  }

  //#region Related Services
  
  public providerServiceService: ProviderService_Service = inject(ProviderService_Service);

	public weekDayService: WeekDay_Service = inject(WeekDay_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ServiceOrientedWorkTime> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ServiceOrientedWorkTime[]> {
    return super.RetrieveAll();
  }

  override Save(serviceOrientedWorkTime: ServiceOrientedWorkTime): Observable<ServiceOrientedWorkTime> {
    if (!ServiceOrientedWorkTime.Validate(serviceOrientedWorkTime)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(serviceOrientedWorkTime);
    }
    return super.Save(serviceOrientedWorkTime);
  }

  override SaveAttached(serviceOrientedWorkTime: ServiceOrientedWorkTime): Observable<ServiceOrientedWorkTime> {
    if (!ServiceOrientedWorkTime.Validate(serviceOrientedWorkTime)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(serviceOrientedWorkTime);
    }
    return super.SaveAttached(serviceOrientedWorkTime);
  }

  override SaveCollection(serviceOrientedWorkTimeList: ServiceOrientedWorkTime[]): Observable<Result> {
    return super.SaveCollection(serviceOrientedWorkTimeList);
  }

  override Delete(serviceOrientedWorkTime: ServiceOrientedWorkTime): Observable<boolean> {
    return super.Delete(serviceOrientedWorkTime);
  }

  override Seek(serviceOrientedWorkTime: ServiceOrientedWorkTime = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ServiceOrientedWorkTime[]> {
    return super.Seek(serviceOrientedWorkTime); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(serviceOrientedWorkTime: ServiceOrientedWorkTime): Observable<ServiceOrientedWorkTime> {
    return super.SeekLast(serviceOrientedWorkTime);
  }

  override SeekByValue(value: string = ''): Observable<ServiceOrientedWorkTime[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
