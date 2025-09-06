

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { CheckConstraint, CheckConstraint_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class CheckConstraint_Service extends Service<CheckConstraint> implements IService<CheckConstraint> {

  constructor() {
    super(CheckConstraint.Info, inject(CheckConstraint_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<CheckConstraint> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<CheckConstraint[]> {
    return super.RetrieveAll();
  }

  override Save(checkConstraint: CheckConstraint): Observable<CheckConstraint> {
    if (!CheckConstraint.Validate(checkConstraint)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(checkConstraint);
    }
    return super.Save(checkConstraint);
  }

  override SaveAttached(checkConstraint: CheckConstraint): Observable<CheckConstraint> {
    if (!CheckConstraint.Validate(checkConstraint)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(checkConstraint);
    }
    return super.SaveAttached(checkConstraint);
  }

  override SaveCollection(checkConstraintList: CheckConstraint[]): Observable<Result> {
    return super.SaveCollection(checkConstraintList);
  }

  override Delete(checkConstraint: CheckConstraint): Observable<boolean> {
    return super.Delete(checkConstraint);
  }

  override Seek(checkConstraint: CheckConstraint = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<CheckConstraint[]> {
    return super.Seek(checkConstraint); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(checkConstraint: CheckConstraint): Observable<CheckConstraint> {
    return super.SeekLast(checkConstraint);
  }

  override SeekByValue(value: string = ''): Observable<CheckConstraint[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
