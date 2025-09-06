

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { AccountStatus, AccountStatus_Service } from '..';


@Component({
  selector: 'base-accountStatus-delete',
  templateUrl: './accountStatus.delete.html',
  styleUrls: ['./accountStatus.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class AccountStatusDeleteUI extends DeleteUI<AccountStatus> implements IDeleteUI<AccountStatus> {

  constructor() {
    super(inject(AccountStatus_Service));
  }

}
