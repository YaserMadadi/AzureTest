

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { MessageType, MessageType_Service } from '..';



@Component({
  selector: 'infra-messageType-edit',
  templateUrl: './messageType.edit.html',
  styleUrls: ['./messageType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class MessageTypeEditUI extends EditUI<MessageType> {
    
  constructor(public override service: MessageType_Service = inject(MessageType_Service )) {
    super(service); 
    
  }

  

  

}
