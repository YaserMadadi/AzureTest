

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ClientWalletTransactionLog, ClientWalletTransactionLog_Service } from '..';


@Component({
  selector: 'fund-clientWalletTransactionLog-delete',
  templateUrl: './clientWalletTransactionLog.delete.html',
  styleUrls: ['./clientWalletTransactionLog.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ClientWalletTransactionLogDeleteUI extends DeleteUI<ClientWalletTransactionLog> implements IDeleteUI<ClientWalletTransactionLog> {

  constructor() {
    super(inject(ClientWalletTransactionLog_Service));
  }

}
