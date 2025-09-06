

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem, IndexButton, IndexHeader, RowButtons, LookupComponent } from '../../../../../core/ui/components';

import { ForeignkeyLinker } from '../../../../../core/ui/helper';
          
import { IHubUI, HubUI } from '../../../../../core/ui/baseUI';
import { NotificationType, NotificationType_Service } from '..';
import { NotificationTypeEditUI } from '../edit/notificationType.edit'
import { NotificationTypeDeleteUI } from '../delete/notificationType.delete'
import { ClientNotification } from '../../clientNotification';
import { ClientNotificationEditUI } from '../../clientNotification/edit/clientNotification.edit';



@Component({
  selector: 'base-notificationType-index',
  templateUrl: './notificationType.hub.html',
  styleUrls: ['./notificationType.hub.scss'],
  providers: [NotificationType_Service],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    IndexHeader,
    RowButtons,
    NotificationTypeEditUI,
    NotificationTypeDeleteUI,
    ClientNotificationEditUI,
  ]
})
export class NotificationTypeHubUI extends HubUI<NotificationType> implements IHubUI<NotificationType> {

  constructor(public override service: NotificationType_Service = inject(NotificationType_Service)) {
    super(service);
    

    this.quickAddItems = [
			new DropdownMenuItem('Add  Client Notification', () => this.onAddClientNotification()),];

    this.linkedEntityItems = [
		];
  }

  

  
  @ViewChild('clientNotificationEditUI')
  public clientNotificationEditUI!: ClientNotificationEditUI;

  onAddClientNotification() {
    let clientNotification = new ClientNotification();
    clientNotification.notificationType = this.currentInstance;
    this.clientNotificationEditUI.Show(clientNotification);
  }


}
