import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { NotificationType, NotificationType_Service } from '..';
import { NotificationType_ClientNotification_DetailUI } from '../detail/notificationType-clientNotification.detail';



@Component({
  selector: 'base-notificationType-master',
  templateUrl: './notificationType.master.html',
  styleUrls: ['./notificationType.master.scss'],
  providers: [
    NotificationType_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //NotificationTypeEditUI,        
    //NotificationTypeDeleteUI,
    NotificationType_ClientNotification_DetailUI
  ]
})
export class NotificationTypeMasterUI extends MasterUI<NotificationType> implements IMasterUI<NotificationType> {

  constructor() {
    super(inject(NotificationType_Service))
  }


}
