

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { ClientNotification, ClientNotification_Service } from '..';
import { ClientNotificationEditUI } from '../edit/clientNotification.edit'
import { ClientNotificationDeleteUI } from '../delete/clientNotification.delete'
import { Client } from '../../client';
import { NotificationType } from '../../notificationType';



@Component({
  selector: 'base-clientNotification-index',
  templateUrl: './clientNotification.hub.html',
  styleUrls: ['./clientNotification.hub.scss'],
  providers: [ClientNotification_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    ClientNotificationEditUI,
    ClientNotificationDeleteUI,
    LookupComponent,
  ]
})
export class ClientNotificationHubUI extends HubUI<ClientNotification> implements IHubUI<ClientNotification> {

  constructor(public override service: ClientNotification_Service = inject(ClientNotification_Service)) {
    super(service);
    this.clientLinker = new ForeignkeyLinker<Client>(this.service.clientService, true);
		this.notificationTypeLinker = new ForeignkeyLinker<NotificationType>(this.service.notificationTypeService, true);

    this.quickAddItems = [];

    this.linkedEntityItems = [
			new DropdownMenuItem('Manage  Client', () => this.navigateToUrl('/base/client')),
			new DropdownMenuItem('Manage  Notification Type', () => this.navigateToUrl('/base/notificationType')),
		];
  }

  public clientLinker: ForeignkeyLinker<Client>;

	public notificationTypeLinker: ForeignkeyLinker<NotificationType>;

  

}
