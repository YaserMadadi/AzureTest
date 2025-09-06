

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService, Service } from '../../../../core/service';

import { Result, MessageController, MessageSchema } from '../../../../core/tools';

import { ResultMessage, ResultMessage_Builder } from '.';

import { MessageType_Service } from '../messageType';


@Injectable({ providedIn: 'root' })
export class ResultMessage_Service extends Service<ResultMessage> implements IService<ResultMessage> {

  constructor() {
    super(ResultMessage.Info, inject(ResultMessage_Builder));
  }

  //#region Related Services
  
  public messageTypeService: MessageType_Service = inject(MessageType_Service);
  
  

  //#endregion Related Services

  //#region Methods

  override RetrieveById(id: number): Observable<ResultMessage> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<ResultMessage[]> {
    return super.RetrieveAll();
  }

  override Save(resultMessage: ResultMessage): Observable<ResultMessage> {
    if (!ResultMessage.Validate(resultMessage)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(resultMessage);
    }
    return super.Save(resultMessage);
  }

  override SaveAttached(resultMessage: ResultMessage): Observable<ResultMessage> {
    if (!ResultMessage.Validate(resultMessage)) {
      MessageController.ShowMessage(MessageSchema.NoValidEntity);
      return of(resultMessage);
    }
    return super.SaveAttached(resultMessage);
  }

  override SaveCollection(resultMessageList: ResultMessage[]): Observable<Result> {
    return super.SaveCollection(resultMessageList);
  }

  override Delete(resultMessage: ResultMessage): Observable<boolean> {
    return super.Delete(resultMessage);
  }

  override Seek(resultMessage: ResultMessage = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<ResultMessage[]> {
    return super.Seek(resultMessage); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(resultMessage: ResultMessage): Observable<ResultMessage> {
    return super.SeekLast(resultMessage);
  }

  override SeekByValue(value: string = ''): Observable<ResultMessage[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  // Laod Enums ... 
}
