

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { DeleteUI, IDeleteUI } from '../../../../../core/ui/baseUI';
import { DeleteButtons, Presenter } from '../../../../../core/ui/components';

import { WalletTopUp, WalletTopUp_Service } from '..';


@Component({
  selector: 'fund-walletTopUp-delete',
  templateUrl: './walletTopUp.delete.html',
  styleUrls: ['./walletTopUp.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class WalletTopUpDeleteUI extends DeleteUI<WalletTopUp> implements IDeleteUI<WalletTopUp> {

  constructor() {
    super(inject(WalletTopUp_Service));
  }

}
