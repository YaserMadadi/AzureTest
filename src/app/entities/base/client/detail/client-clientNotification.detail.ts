
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { Client, Client_ServiceCollection } from '../../client';
import { ClientNotification, ClientNotification_Builder } from '../../clientNotification';
import { ClientNotificationEditUI } from '../../clientNotification/edit/clientNotification.edit'
import { ClientNotificationDeleteUI } from '../../clientNotification/delete/clientNotification.delete'
import { NotificationType, NotificationType_Service } from '../../notificationType';



@Component({
  selector: 'base-client-clientNotification-detail',
  templateUrl: './client-clientNotification.detail.html',
  styleUrls: ['./client-clientNotification.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    SHARED_PIPES,
    DetailButton,
    RowButtons,
    LookupComponent,
    ClientNotificationEditUI,        
    ClientNotificationDeleteUI,
  ]
}) 
export class Client_ClientNotification_DetailUI extends DetailUI<Client, ClientNotification> {

  constructor(private serviceCollection: Client_ServiceCollection = inject(Client_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientNotification.bind(serviceCollection), inject(ClientNotification_Builder));
    this.currentInstance = new ClientNotification();
  }

  @Input()
  public set client(value: Client) {
    this.masterInstance = { ...value };
    //this.currentInstance.client = { ...value };
    this.sourceInstance.client = { ...value };
  }

  public notificationTypeLinker: ForeignkeyLinker<NotificationType> = new ForeignkeyLinker<NotificationType>(inject(NotificationType_Service), true);

		

}
