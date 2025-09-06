

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { UserAccount, UserAccount_Service } from '..';


@Component({
  selector: 'base-userAccount-delete',
  templateUrl: './userAccount.delete.html',
  styleUrls: ['./userAccount.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class UserAccountDeleteUI extends DeleteUI<UserAccount> implements IDeleteUI<UserAccount> {

  constructor() {
    super(inject(UserAccount_Service));
  }

}
