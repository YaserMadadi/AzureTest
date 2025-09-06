
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { MessageType, MessageType_ServiceCollection } from '../../messageType';
import { ResultMessage, ResultMessage_Builder } from '../../resultMessage';
import { ResultMessageEditUI } from '../../resultMessage/edit/resultMessage.edit'
import { ResultMessageDeleteUI } from '../../resultMessage/delete/resultMessage.delete'



@Component({
  selector: 'infra-messageType-resultMessage-detail',
  templateUrl: './messageType-resultMessage.detail.html',
  styleUrls: ['./messageType-resultMessage.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    
    ResultMessageEditUI,        
    ResultMessageDeleteUI,
  ]
}) 
export class MessageType_ResultMessage_DetailUI extends DetailUI<MessageType, ResultMessage> {

  constructor(private serviceCollection: MessageType_ServiceCollection = inject(MessageType_ServiceCollection)) {
    super(serviceCollection.CollectionOfResultMessage.bind(serviceCollection), inject(ResultMessage_Builder));
    this.currentInstance = new ResultMessage();
  }

  @Input()
  public set messageType(value: MessageType) {
    this.masterInstance = { ...value };
    //this.currentInstance.messageType = { ...value };
    this.sourceInstance.messageType = { ...value };
  }

  

}
