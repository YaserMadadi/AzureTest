import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes';
import { MasterUI, IMasterUI } from '../../../../../core/ui/baseUI';
import { MasterButtons, PresenterTextBox, IndexHeader } from '../../../../../core/ui/components';

import { WalletTopUp, WalletTopUp_Service } from '..';



@Component({
  selector: 'fund-walletTopUp-master',
  templateUrl: './walletTopUp.master.html',
  styleUrls: ['./walletTopUp.master.scss'],
  providers: [
    WalletTopUp_Service,
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    IndexHeader,
    PresenterTextBox,
    //WalletTopUpEditUI,        
    //WalletTopUpDeleteUI,
    // No Item...
  ]
})
export class WalletTopUpMasterUI extends MasterUI<WalletTopUp> implements IMasterUI<WalletTopUp> {

  constructor() {
    super(inject(WalletTopUp_Service))
  }


}
