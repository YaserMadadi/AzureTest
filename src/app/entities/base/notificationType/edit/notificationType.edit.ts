

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { NotificationType, NotificationType_Service } from '..';



@Component({
  selector: 'base-notificationType-edit',
  templateUrl: './notificationType.edit.html',
  styleUrls: ['./notificationType.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class NotificationTypeEditUI extends EditUI<NotificationType> {
    
  constructor(public override service: NotificationType_Service = inject(NotificationType_Service )) {
    super(service); 
    
  }

  

  

}
