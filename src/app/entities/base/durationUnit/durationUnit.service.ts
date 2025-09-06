

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { DurationUnit, DurationUnit_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class DurationUnit_Service extends Service<DurationUnit> implements IService<DurationUnit> {

  constructor() {
    super(DurationUnit.Info, inject(DurationUnit_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<DurationUnit> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<DurationUnit[]> {
    return super.RetrieveAll();
  }

  override Save(durationUnit: DurationUnit): Observable<DurationUnit> {
    if (!DurationUnit.Validate(durationUnit)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(durationUnit);
    }
    return super.Save(durationUnit);
  }

  override SaveAttached(durationUnit: DurationUnit): Observable<DurationUnit> {
    if (!DurationUnit.Validate(durationUnit)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(durationUnit);
    }
    return super.SaveAttached(durationUnit);
  }

  override SaveCollection(durationUnitList: DurationUnit[]): Observable<Result> {
    return super.SaveCollection(durationUnitList);
  }

  override Delete(durationUnit: DurationUnit): Observable<boolean> {
    return super.Delete(durationUnit);
  }

  override Seek(durationUnit: DurationUnit = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<DurationUnit[]> {
    return super.Seek(durationUnit); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(durationUnit: DurationUnit): Observable<DurationUnit> {
    return super.SeekLast(durationUnit);
  }

  override SeekByValue(value: string = ''): Observable<DurationUnit[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
