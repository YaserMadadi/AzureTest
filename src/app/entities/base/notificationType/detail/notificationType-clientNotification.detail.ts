
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailUI } from '../../../../../core/ui/baseUI';
import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { LookupComponent, RowButtons, DetailButton } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';


import { NotificationType, NotificationType_ServiceCollection } from '../../notificationType';
import { ClientNotification, ClientNotification_Builder } from '../../clientNotification';
import { ClientNotificationEditUI } from '../../clientNotification/edit/clientNotification.edit'
import { ClientNotificationDeleteUI } from '../../clientNotification/delete/clientNotification.delete'
import { Client, Client_Service } from '../../client';



@Component({
  selector: 'base-notificationType-clientNotification-detail',
  templateUrl: './notificationType-clientNotification.detail.html',
  styleUrls: ['./notificationType-clientNotification.detail.scss'],
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
export class NotificationType_ClientNotification_DetailUI extends DetailUI<NotificationType, ClientNotification> {

  constructor(private serviceCollection: NotificationType_ServiceCollection = inject(NotificationType_ServiceCollection)) {
    super(serviceCollection.CollectionOfClientNotification.bind(serviceCollection), inject(ClientNotification_Builder));
    this.currentInstance = new ClientNotification();
  }

  @Input()
  public set notificationType(value: NotificationType) {
    this.masterInstance = { ...value };
    //this.currentInstance.notificationType = { ...value };
    this.sourceInstance.notificationType = { ...value };
  }

  public clientLinker: ForeignkeyLinker<Client> = new ForeignkeyLinker<Client>(inject(Client_Service), true);

		

}
