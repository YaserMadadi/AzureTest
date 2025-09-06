

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { NotificationType, NotificationType_Service } from '..';


@Component({
  selector: 'base-notificationType-delete',
  templateUrl: './notificationType.delete.html',
  styleUrls: ['./notificationType.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class NotificationTypeDeleteUI extends DeleteUI<NotificationType> implements IDeleteUI<NotificationType> {

  constructor() {
    super(inject(NotificationType_Service));
  }

}
