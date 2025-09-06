

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { WeekDay, WeekDay_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class WeekDay_Service extends Service<WeekDay> implements IService<WeekDay> {

  constructor() {
    super(WeekDay.Info, inject(WeekDay_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<WeekDay> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<WeekDay[]> {
    return super.RetrieveAll();
  }

  override Save(weekDay: WeekDay): Observable<WeekDay> {
    if (!WeekDay.Validate(weekDay)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(weekDay);
    }
    return super.Save(weekDay);
  }

  override SaveAttached(weekDay: WeekDay): Observable<WeekDay> {
    if (!WeekDay.Validate(weekDay)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(weekDay);
    }
    return super.SaveAttached(weekDay);
  }

  override SaveCollection(weekDayList: WeekDay[]): Observable<Result> {
    return super.SaveCollection(weekDayList);
  }

  override Delete(weekDay: WeekDay): Observable<boolean> {
    return super.Delete(weekDay);
  }

  override Seek(weekDay: WeekDay = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<WeekDay[]> {
    return super.Seek(weekDay); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(weekDay: WeekDay): Observable<WeekDay> {
    return super.SeekLast(weekDay);
  }

  override SeekByValue(value: string = ''): Observable<WeekDay[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
