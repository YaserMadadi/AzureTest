import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { ClientNotification, ClientNotification_Service } from '..';



@Component({
  selector: 'base-clientNotification-master',
  templateUrl: './clientNotification.master.html',
  styleUrls: ['./clientNotification.master.scss'],
  providers: [
    ClientNotification_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //ClientNotificationEditUI,        
    //ClientNotificationDeleteUI,
    // No Item...
  ]
})
export class ClientNotificationMasterUI extends MasterUI<ClientNotification> implements IMasterUI<ClientNotification> {

  constructor() {
    super(inject(ClientNotification_Service))
  }


}
