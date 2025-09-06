

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { MessageType, MessageType_Builder } from '.';



@Injectable({ providedIn: 'root' })
export class MessageType_Service extends Service<MessageType> implements IService<MessageType> {

  constructor() {
    super(MessageType.Info, inject(MessageType_Builder));
  }

  //#region Related Services
  
  
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<MessageType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<MessageType[]> {
    return super.RetrieveAll();
  }

  override Save(messageType: MessageType): Observable<MessageType> {
    if (!MessageType.Validate(messageType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(messageType);
    }
    return super.Save(messageType);
  }

  override SaveAttached(messageType: MessageType): Observable<MessageType> {
    if (!MessageType.Validate(messageType)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(messageType);
    }
    return super.SaveAttached(messageType);
  }

  override SaveCollection(messageTypeList: MessageType[]): Observable<Result> {
    return super.SaveCollection(messageTypeList);
  }

  override Delete(messageType: MessageType): Observable<boolean> {
    return super.Delete(messageType);
  }

  override Seek(messageType: MessageType = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<MessageType[]> {
    return super.Seek(messageType); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(messageType: MessageType): Observable<MessageType> {
    return super.SeekLast(messageType);
  }

  override SeekByValue(value: string = ''): Observable<MessageType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
