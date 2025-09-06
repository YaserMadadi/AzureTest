

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { InsuranceType, InsuranceType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class InsuranceType_Service extends Service<InsuranceType> implements IService<InsuranceType> {

  constructor() {
    super(InsuranceType.Info, inject(InsuranceType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<InsuranceType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<InsuranceType[]> {
    return super.RetrieveAll();
  }

  override Save(insuranceType: InsuranceType): Observable<InsuranceType> {
    if (!InsuranceType.Validate(insuranceType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(insuranceType);
    }
    return super.Save(insuranceType);
  }

  override SaveAttached(insuranceType: InsuranceType): Observable<InsuranceType> {
    if (!InsuranceType.Validate(insuranceType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(insuranceType);
    }
    return super.SaveAttached(insuranceType);
  }

  override SaveCollection(insuranceTypeList: InsuranceType[]): Observable<Result> {
    return super.SaveCollection(insuranceTypeList);
  }

  override Delete(insuranceType: InsuranceType): Observable<boolean> {
    return super.Delete(insuranceType);
  }

  override Seek(insuranceType: InsuranceType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<InsuranceType[]> {
    return super.Seek(insuranceType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(insuranceType: InsuranceType): Observable<InsuranceType> {
    return super.SeekLast(insuranceType);
  }

  override SeekByValue(value: string = ''): Observable<InsuranceType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
