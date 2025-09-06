

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ClientNotification, ClientNotification_Service } from '..';


@Component({
  selector: 'base-clientNotification-delete',
  templateUrl: './clientNotification.delete.html',
  styleUrls: ['./clientNotification.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ClientNotificationDeleteUI extends DeleteUI<ClientNotification> implements IDeleteUI<ClientNotification> {

  constructor() {
    super(inject(ClientNotification_Service));
  }

}
