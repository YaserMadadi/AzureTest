
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ServiceCollection, IServiceCollection, API_Operation } from '../../../../core/service';

import { MessageType } from '.';
import { ResultMessage, ResultMessage_Builder } from '../resultMessage';


@Injectable({ providedIn: 'root' })
export class MessageType_ServiceCollection extends ServiceCollection<MessageType> implements IServiceCollection<MessageType> {

  constructor() {
    super();
  }

  //#region CollectionMethods

  CollectionOfResultMessage(messageType_id: number, resultMessage: ResultMessage = ResultMessage_Builder.BuildSeekInstance()): Observable<ResultMessage[]> {
    return super.CollectionOf<ResultMessage>(new MessageType(messageType_id), resultMessage);
  }

	//#endregion
}
