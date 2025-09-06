

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { WeightUnit, WeightUnit_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class WeightUnit_Service extends Service<WeightUnit> implements IService<WeightUnit> {

  constructor() {
    super(WeightUnit.Info, inject(WeightUnit_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<WeightUnit> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<WeightUnit[]> {
    return super.RetrieveAll();
  }

  override Save(weightUnit: WeightUnit): Observable<WeightUnit> {
    if (!WeightUnit.Validate(weightUnit)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(weightUnit);
    }
    return super.Save(weightUnit);
  }

  override SaveAttached(weightUnit: WeightUnit): Observable<WeightUnit> {
    if (!WeightUnit.Validate(weightUnit)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(weightUnit);
    }
    return super.SaveAttached(weightUnit);
  }

  override SaveCollection(weightUnitList: WeightUnit[]): Observable<Result> {
    return super.SaveCollection(weightUnitList);
  }

  override Delete(weightUnit: WeightUnit): Observable<boolean> {
    return super.Delete(weightUnit);
  }

  override Seek(weightUnit: WeightUnit = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<WeightUnit[]> {
    return super.Seek(weightUnit); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(weightUnit: WeightUnit): Observable<WeightUnit> {
    return super.SeekLast(weightUnit);
  }

  override SeekByValue(value: string = ''): Observable<WeightUnit[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
