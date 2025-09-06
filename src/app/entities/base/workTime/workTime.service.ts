

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { WorkTime, WorkTime_Builder } from '.';

import { Provider_Service } from '../provider';
import { WeekDay_Service } from '../weekDay';


@Injectable({ providedIn: 'root' })
export class WorkTime_Service extends Service<WorkTime> implements IService<WorkTime> {

  constructor() {
    super(WorkTime.Info, inject(WorkTime_Builder));
  }

  //#region Related Services
  
  public providerService: Provider_Service = inject(Provider_Service);

	public weekDayService: WeekDay_Service = inject(WeekDay_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<WorkTime> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<WorkTime[]> {
    return super.RetrieveAll();
  }

  override Save(workTime: WorkTime): Observable<WorkTime> {
    if (!WorkTime.Validate(workTime)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(workTime);
    }
    return super.Save(workTime);
  }

  override SaveAttached(workTime: WorkTime): Observable<WorkTime> {
    if (!WorkTime.Validate(workTime)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(workTime);
    }
    return super.SaveAttached(workTime);
  }

  override SaveCollection(workTimeList: WorkTime[]): Observable<Result> {
    return super.SaveCollection(workTimeList);
  }

  override Delete(workTime: WorkTime): Observable<boolean> {
    return super.Delete(workTime);
  }

  override Seek(workTime: WorkTime = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<WorkTime[]> {
    return super.Seek(workTime); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(workTime: WorkTime): Observable<WorkTime> {
    return super.SeekLast(workTime);
  }

  override SeekByValue(value: string = ''): Observable<WorkTime[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
