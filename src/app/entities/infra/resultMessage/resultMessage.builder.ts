

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { ResultMessage } from '.';


@Injectable({ providedIn: 'root' })
export class ResultMessage_Builder extends ServiceBuilder<ResultMessage> implements IServiceBuilder<ResultMessage> {

  constructor() {
        super();
    }

  
  BuildInstance(): ResultMessage;
  BuildInstance(id: number): ResultMessage;
  BuildInstance(id: number, descriptor: string): ResultMessage;
  BuildInstance(id: number = 0, descriptor: string = ''): ResultMessage {
    return new ResultMessage(id, descriptor);
  }

  BuildSeekInstance(): ResultMessage {
    return ResultMessage_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): ResultMessage {
    let resultMessage = new ResultMessage();
    resultMessage.messageType = undefined;
    return resultMessage;
  }
}