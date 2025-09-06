

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ExceptionBackend, ExceptionBackend_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class ExceptionBackend_Service extends Service<ExceptionBackend> implements IService<ExceptionBackend> {

  constructor() {
    super(ExceptionBackend.Info, inject(ExceptionBackend_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ExceptionBackend> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ExceptionBackend[]> {
    return super.RetrieveAll();
  }

  override Save(exceptionBackend: ExceptionBackend): Observable<ExceptionBackend> {
    if (!ExceptionBackend.Validate(exceptionBackend)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(exceptionBackend);
    }
    return super.Save(exceptionBackend);
  }

  override SaveAttached(exceptionBackend: ExceptionBackend): Observable<ExceptionBackend> {
    if (!ExceptionBackend.Validate(exceptionBackend)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(exceptionBackend);
    }
    return super.SaveAttached(exceptionBackend);
  }

  override SaveCollection(exceptionBackendList: ExceptionBackend[]): Observable<Result> {
    return super.SaveCollection(exceptionBackendList);
  }

  override Delete(exceptionBackend: ExceptionBackend): Observable<boolean> {
    return super.Delete(exceptionBackend);
  }

  override Seek(exceptionBackend: ExceptionBackend = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ExceptionBackend[]> {
    return super.Seek(exceptionBackend); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(exceptionBackend: ExceptionBackend): Observable<ExceptionBackend> {
    return super.SeekLast(exceptionBackend);
  }

  override SeekByValue(value: string = ''): Observable<ExceptionBackend[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
