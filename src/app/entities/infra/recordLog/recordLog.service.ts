

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { RecordLog, RecordLog_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class RecordLog_Service extends Service<RecordLog> implements IService<RecordLog> {

  constructor() {
    super(RecordLog.Info, inject(RecordLog_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<RecordLog> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<RecordLog[]> {
    return super.RetrieveAll();
  }

  override Save(recordLog: RecordLog): Observable<RecordLog> {
    if (!RecordLog.Validate(recordLog)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(recordLog);
    }
    return super.Save(recordLog);
  }

  override SaveAttached(recordLog: RecordLog): Observable<RecordLog> {
    if (!RecordLog.Validate(recordLog)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(recordLog);
    }
    return super.SaveAttached(recordLog);
  }

  override SaveCollection(recordLogList: RecordLog[]): Observable<Result> {
    return super.SaveCollection(recordLogList);
  }

  override Delete(recordLog: RecordLog): Observable<boolean> {
    return super.Delete(recordLog);
  }

  override Seek(recordLog: RecordLog = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<RecordLog[]> {
    return super.Seek(recordLog); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(recordLog: RecordLog): Observable<RecordLog> {
    return super.SeekLast(recordLog);
  }

  override SeekByValue(value: string = ''): Observable<RecordLog[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
