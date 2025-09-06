

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { BackgroundCheckStatus, BackgroundCheckStatus_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class BackgroundCheckStatus_Service extends Service<BackgroundCheckStatus> implements IService<BackgroundCheckStatus> {

  constructor() {
    super(BackgroundCheckStatus.Info, inject(BackgroundCheckStatus_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<BackgroundCheckStatus> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<BackgroundCheckStatus[]> {
    return super.RetrieveAll();
  }

  override Save(backgroundCheckStatus: BackgroundCheckStatus): Observable<BackgroundCheckStatus> {
    if (!BackgroundCheckStatus.Validate(backgroundCheckStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(backgroundCheckStatus);
    }
    return super.Save(backgroundCheckStatus);
  }

  override SaveAttached(backgroundCheckStatus: BackgroundCheckStatus): Observable<BackgroundCheckStatus> {
    if (!BackgroundCheckStatus.Validate(backgroundCheckStatus)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(backgroundCheckStatus);
    }
    return super.SaveAttached(backgroundCheckStatus);
  }

  override SaveCollection(backgroundCheckStatusList: BackgroundCheckStatus[]): Observable<Result> {
    return super.SaveCollection(backgroundCheckStatusList);
  }

  override Delete(backgroundCheckStatus: BackgroundCheckStatus): Observable<boolean> {
    return super.Delete(backgroundCheckStatus);
  }

  override Seek(backgroundCheckStatus: BackgroundCheckStatus = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<BackgroundCheckStatus[]> {
    return super.Seek(backgroundCheckStatus); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(backgroundCheckStatus: BackgroundCheckStatus): Observable<BackgroundCheckStatus> {
    return super.SeekLast(backgroundCheckStatus);
  }

  override SeekByValue(value: string = ''): Observable<BackgroundCheckStatus[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
