

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { BackgroundCheckStatus, BackgroundCheckStatus_Service } from '..';


@Component({
  selector: 'base-backgroundCheckStatus-delete',
  templateUrl: './backgroundCheckStatus.delete.html',
  styleUrls: ['./backgroundCheckStatus.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class BackgroundCheckStatusDeleteUI extends DeleteUI<BackgroundCheckStatus> implements IDeleteUI<BackgroundCheckStatus> {

  constructor() {
    super(inject(BackgroundCheckStatus_Service));
  }

}
