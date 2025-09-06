import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { MessageType, MessageType_Service } from '..';
import { MessageType_ResultMessage_DetailUI } from '../detail/messageType-resultMessage.detail';



@Component({
  selector: 'infra-messageType-master',
  templateUrl: './messageType.master.html',
  styleUrls: ['./messageType.master.scss'],
  providers: [
    MessageType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //MessageTypeEditUI,        
    //MessageTypeDeleteUI,
    MessageType_ResultMessage_DetailUI
  ]
})
export class MessageTypeMasterUI extends MasterUI<MessageType> implements IMasterUI<MessageType> {

  constructor() {
    super(inject(MessageType_Service))
  }


}
