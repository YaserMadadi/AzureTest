

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ClientNotification, ClientNotification_Service } from '..';
import { Client } from '../../client';
import { NotificationType } from '../../notificationType';



@Component({
  selector: 'base-clientNotification-edit',
  templateUrl: './clientNotification.edit.html',
  styleUrls: ['./clientNotification.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ClientNotificationEditUI extends EditUI<ClientNotification> {
    
  constructor(public override service: ClientNotification_Service = inject(ClientNotification_Service )) {
    super(service); 
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.notificationTypeLinker = new ForeignkeyLinker<NotificationType>(this.service.notificationTypeService, true);
  }

  @Input() 
  set clientLocked(value: boolean) {
    this.clientLinker.locked = value;
  }

	@Input() 
  set notificationTypeLocked(value: boolean) {
    this.notificationTypeLinker.locked = value;
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public notificationTypeLinker: ForeignkeyLinker<NotificationType>;

}
