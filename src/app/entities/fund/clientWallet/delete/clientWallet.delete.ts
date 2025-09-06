

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { ClientWallet, ClientWallet_Service } from '..';


@Component({
  selector: 'fund-clientWallet-delete',
  templateUrl: './clientWallet.delete.html',
  styleUrls: ['./clientWallet.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class ClientWalletDeleteUI extends DeleteUI<ClientWallet> implements IDeleteUI<ClientWallet> {

  constructor() {
    super(inject(ClientWallet_Service));
  }

}
