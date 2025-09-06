

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ResultMessage, ResultMessage_Service } from '..';
import { ResultMessageEditUI } from '../edit/resultMessage.edit'
import { ResultMessageDeleteUI } from '../delete/resultMessage.delete'
import { MessageType } from '../../messageType';



@Component({
  selector: 'infra-resultMessage-index',
  templateUrl: './resultMessage.hub.html',
  styleUrls: ['./resultMessage.hub.scss'],
  providers: [ResultMessage_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ResultMessageEditUI,
    ResultMessageDeleteUI,
    LookupComponent,
  ]
})
export class ResultMessageHubUI extends HubUI<ResultMessage> implements IHubUI<ResultMessage> {

  constructor(public override service: ResultMessage_Service = inject(ResultMessage_Service)) {
    super(service);
    this.messageTypeLinker = new ForeignkeyLinker<MessageType>(this.service.messageTypeService, false);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Message Type', () => this.navigateToUrl('/infra/messageType')),
		];
  }

  public messageTypeLinker: ForeignkeyLinker<MessageType>;

  

}
