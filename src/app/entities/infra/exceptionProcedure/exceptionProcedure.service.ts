

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ExceptionProcedure, ExceptionProcedure_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class ExceptionProcedure_Service extends Service<ExceptionProcedure> implements IService<ExceptionProcedure> {

  constructor() {
    super(ExceptionProcedure.Info, inject(ExceptionProcedure_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ExceptionProcedure> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ExceptionProcedure[]> {
    return super.RetrieveAll();
  }

  override Save(exceptionProcedure: ExceptionProcedure): Observable<ExceptionProcedure> {
    if (!ExceptionProcedure.Validate(exceptionProcedure)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(exceptionProcedure);
    }
    return super.Save(exceptionProcedure);
  }

  override SaveAttached(exceptionProcedure: ExceptionProcedure): Observable<ExceptionProcedure> {
    if (!ExceptionProcedure.Validate(exceptionProcedure)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(exceptionProcedure);
    }
    return super.SaveAttached(exceptionProcedure);
  }

  override SaveCollection(exceptionProcedureList: ExceptionProcedure[]): Observable<Result> {
    return super.SaveCollection(exceptionProcedureList);
  }

  override Delete(exceptionProcedure: ExceptionProcedure): Observable<boolean> {
    return super.Delete(exceptionProcedure);
  }

  override Seek(exceptionProcedure: ExceptionProcedure = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ExceptionProcedure[]> {
    return super.Seek(exceptionProcedure); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(exceptionProcedure: ExceptionProcedure): Observable<ExceptionProcedure> {
    return super.SeekLast(exceptionProcedure);
  }

  override SeekByValue(value: string = ''): Observable<ExceptionProcedure[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
