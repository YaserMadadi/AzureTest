

import { Injectable } from '@angular/core';
import { ServiceBuilder, IServiceBuilder } from '../../../../core/service';

import { MessageType } from '.';


@Injectable({ providedIn: 'root' })
export class MessageType_Builder extends ServiceBuilder<MessageType> implements IServiceBuilder<MessageType> {

  constructor() {
        super();
    }

  
  BuildInstance(): MessageType;
  BuildInstance(id: number): MessageType;
  BuildInstance(id: number, descriptor: string): MessageType;
  BuildInstance(id: number = 0, descriptor: string = ''): MessageType {
    return new MessageType(id, descriptor);
  }

  BuildSeekInstance(): MessageType {
    return MessageType_Builder.BuildSeekInstance();
  }

  static BuildSeekInstance(): MessageType {
    let messageType = new MessageType();
    
    return messageType;
  }
}