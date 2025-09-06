

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ConnectionType, ConnectionType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class ConnectionType_Service extends Service<ConnectionType> implements IService<ConnectionType> {

  constructor() {
    super(ConnectionType.Info, inject(ConnectionType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ConnectionType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ConnectionType[]> {
    return super.RetrieveAll();
  }

  override Save(connectionType: ConnectionType): Observable<ConnectionType> {
    if (!ConnectionType.Validate(connectionType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(connectionType);
    }
    return super.Save(connectionType);
  }

  override SaveAttached(connectionType: ConnectionType): Observable<ConnectionType> {
    if (!ConnectionType.Validate(connectionType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(connectionType);
    }
    return super.SaveAttached(connectionType);
  }

  override SaveCollection(connectionTypeList: ConnectionType[]): Observable<Result> {
    return super.SaveCollection(connectionTypeList);
  }

  override Delete(connectionType: ConnectionType): Observable<boolean> {
    return super.Delete(connectionType);
  }

  override Seek(connectionType: ConnectionType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ConnectionType[]> {
    return super.Seek(connectionType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(connectionType: ConnectionType): Observable<ConnectionType> {
    return super.SeekLast(connectionType);
  }

  override SeekByValue(value: string = ''): Observable<ConnectionType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
