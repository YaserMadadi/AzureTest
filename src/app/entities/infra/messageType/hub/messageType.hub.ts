

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { MessageType, MessageType_Service } from '..';
import { MessageTypeEditUI } from '../edit/messageType.edit'
import { MessageTypeDeleteUI } from '../delete/messageType.delete'
import { ResultMessage } from '../../resultMessage';
import { ResultMessageEditUI } from '../../resultMessage/edit/resultMessage.edit';



@Component({
  selector: 'infra-messageType-index',
  templateUrl: './messageType.hub.html',
  styleUrls: ['./messageType.hub.scss'],
  providers: [MessageType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    MessageTypeEditUI,
    MessageTypeDeleteUI,
    ResultMessageEditUI,
  ]
})
export class MessageTypeHubUI extends HubUI<MessageType> implements IHubUI<MessageType> {

  constructor(public override service: MessageType_Service = inject(MessageType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Result Message', () => this.onAddResultMessage()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('resultMessageEditUI')
  public resultMessageEditUI!: ResultMessageEditUI;

  onAddResultMessage() {
    let resultMessage = new ResultMessage();
    resultMessage.messageType = this.currentInstance;
    this.resultMessageEditUI.Show(resultMessage);
  }


}
