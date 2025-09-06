

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ResultMessage, ResultMessage_Service } from '..';
import { MessageType } from '../../messageType';



@Component({
  selector: 'infra-resultMessage-edit',
  templateUrl: './resultMessage.edit.html',
  styleUrls: ['./resultMessage.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ResultMessageEditUI extends EditUI<ResultMessage> {
    
  constructor(public override service: ResultMessage_Service = inject(ResultMessage_Service )) {
    super(service); 
    this.messageTypeLinker = new ForeignkeyLinker<MessageType>(this.service.messageTypeService, false);
  }

  @Input() 
  set messageTypeLocked(value: boolean) {
    this.messageTypeLinker.locked = value;
  }

  public messageTypeLinker: ForeignkeyLinker<MessageType>;

}
