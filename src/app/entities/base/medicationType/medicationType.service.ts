

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { MedicationType, MedicationType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class MedicationType_Service extends Service<MedicationType> implements IService<MedicationType> {

  constructor() {
    super(MedicationType.Info, inject(MedicationType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<MedicationType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<MedicationType[]> {
    return super.RetrieveAll();
  }

  override Save(medicationType: MedicationType): Observable<MedicationType> {
    if (!MedicationType.Validate(medicationType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(medicationType);
    }
    return super.Save(medicationType);
  }

  override SaveAttached(medicationType: MedicationType): Observable<MedicationType> {
    if (!MedicationType.Validate(medicationType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(medicationType);
    }
    return super.SaveAttached(medicationType);
  }

  override SaveCollection(medicationTypeList: MedicationType[]): Observable<Result> {
    return super.SaveCollection(medicationTypeList);
  }

  override Delete(medicationType: MedicationType): Observable<boolean> {
    return super.Delete(medicationType);
  }

  override Seek(medicationType: MedicationType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<MedicationType[]> {
    return super.Seek(medicationType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(medicationType: MedicationType): Observable<MedicationType> {
    return super.SeekLast(medicationType);
  }

  override SeekByValue(value: string = ''): Observable<MedicationType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
